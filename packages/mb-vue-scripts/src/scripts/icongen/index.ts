import path from 'path';
import fs from 'fs-extra';
import glob from 'glob';
import { optimize } from 'svgo';
import { JSDOM } from 'jsdom';
import paths from '../../utils/paths';
import { toKebabCase, toPascalCase } from '../../utils/convert-case';
import svgoConfig from './svgo.config';
import {
  getMbVueIcon,
  getComponentIndex,
  getIconVue,
  getIndex,
} from './vue-template';

interface IconData {
  title: string;
  type: string;
  list: Array<{
    name: string;
    componentName: string;
    path: string;
  }>;
}

const root = process.cwd();

const maps: Record<string, string> = {
  direction: '方向指示类图标',
  tips: '提示建议类图标',
  interactiveButton: '交互按钮类图标',
  edit: '编辑类图标',
  media: '影音类图标',
  logo: '商标类图标',
  general: '通用类图标',
};

function getSVGData(): IconData[] {
  const data: IconData[] = [];
  for (const key of Object.keys(maps)) {
    const iconData: IconData = {
      title: maps[key],
      type: key,
      list: [],
    };
    const files = glob.sync(`${toKebabCase(key)}/**/*.svg`, {
      cwd: paths.iconSvgs,
      absolute: true,
    });
    for (const filePath of files) {
      const name = `icon-${path.basename(filePath, '.svg')}`;
      iconData.list.push({
        name,
        componentName: `${toPascalCase(name)}`,
        path: filePath,
      });
    }
    data.push(iconData);
  }

  return data;
}

async function buildIconComponent(data: IconData[]) {
  await fs.emptyDir(path.resolve(root, 'components/icon'));

  for (const iconData of data) {
    for (const item of iconData.list) {
      const svgFile = fs.readFileSync(item.path, 'utf8');

      const optimizedSvg = optimize(svgFile, {
        path: item.path,
        ...svgoConfig,
      });
      if ('data' in optimizedSvg) {
        const { data } = optimizedSvg;
        const svgElement = JSDOM.fragment(data).firstElementChild;
        if (svgElement) {
          fs.outputFile(
            path.resolve(paths.iconComponents, `${item.name}/${item.name}.vue`),
            getIconVue({
              name: item.name,
              componentName: item.componentName,
              svgHtml: svgElement.outerHTML,
            }),
            (err) => {
              if (err) {
                console.log(`Build ${item.componentName} Failed: ${err}`);
              } else {
                console.log(`Build ${item.componentName} Success!`);
              }
            }
          );
        }
      }

      const indexContent = getComponentIndex({
        name: item.name,
        componentName: item.componentName,
      });

      fs.outputFile(
        path.resolve(paths.iconComponents, `${item.name}/index.ts`),
        indexContent,
        (err) => {
          if (err) {
            console.log(`Build ${item.componentName} Failed: ${err}`);
          } else {
            console.log(`Build ${item.componentName} Success!`);
          }
        }
      );
    }
  }
}

function buildIndex(data: IconData[]) {
  const imports = [];
  const exports = [];
  const components = [];

  for (const iconData of data) {
    for (const item of iconData.list) {
      components.push(item.componentName);
      imports.push(`import ${item.componentName} from './${item.name}';`);
      exports.push(
        `export { default as ${item.componentName} } from './${item.name}';`
      );
    }
  }

  const mbContent = getMbVueIcon({ imports, components });
  const indexContent = getIndex({ exports });

  fs.outputFile(
    path.resolve(paths.iconComponents, 'mb-vue-icon.ts'),
    mbContent,
    (err) => {
      if (err) {
        console.log(`Build MbVueIcon Failed: ${err}`);
      } else {
        console.log('Build MbVueIcon Success!');
      }
    }
  );

  fs.outputFile(
    path.resolve(paths.iconComponents, 'index.ts'),
    indexContent,
    (err) => {
      if (err) {
        console.log(`Build Index Failed: ${err}`);
      } else {
        console.log('Build Index Success!');
      }
    }
  );

  fs.outputFile(
    path.resolve(paths.icon, 'icons.json'),
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) {
        console.log(`Build JSON Failed: ${err}`);
      } else {
        console.log('Build JSON Success!');
      }
    }
  );
}

const icongen = async () => {
  const data = getSVGData();
  await buildIconComponent(data);
  buildIndex(data);
};

export default icongen;
