import type {
  ComponentResolver,
  ComponentInfo,
} from 'unplugin-vue-components/types';

function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
}

const matchComponents = [
  {
    pattern: /^AnchorLink$/,
    componentDir: 'anchor',
  },
  {
    pattern: /^AvatarGroup$/,
    componentDir: 'avatar',
  },
  {
    pattern: /^BreadcrumbItem$/,
    componentDir: 'breadcrumb',
  },
  {
    pattern: /^ButtonGroup$/,
    componentDir: 'button',
  },
  {
    pattern: /^(CardMeta|CardGrid)$/,
    componentDir: 'card',
  },
  {
    pattern: /^CarouselItem$/,
    componentDir: 'carousel',
  },
  {
    pattern: /^CascaderPanel$/,
    componentDir: 'cascader',
  },
  {
    pattern: /^CheckboxGroup$/,
    componentDir: 'checkbox',
  },
  {
    pattern: /^CollapseItem$/,
    componentDir: 'collapse',
  },
  {
    pattern: /^(WeekPicker|MonthPicker|YearPicker|QuarterPicker|RangePicker)$/,
    componentDir: 'date-picker',
  },
  {
    pattern: /^DescriptionsItem$/,
    componentDir: 'descriptions',
  },
  {
    pattern: /^(Doption|Dgroup|Dsubmenu|DropdownButton)$/,
    componentDir: 'dropdown',
  },
  {
    pattern: /^FormItem$/,
    componentDir: 'form',
  },
  {
    pattern: /^(Col|Row|GridItem)$/,
    componentDir: 'grid',
  },
  {
    pattern: /^(ImagePreview|ImagePreviewGroup)$/,
    componentDir: 'image',
  },
  {
    pattern: /^(InputGroup|InputSearch|InputPassword)$/,
    componentDir: 'input',
  },

  {
    pattern: /^(LayoutHeader|LayoutContent|LayoutFooter|LayoutSider)$/,
    componentDir: 'layout',
  },
  {
    pattern: /^(ListItem|ListItemMeta)$/,
    componentDir: 'list',
  },
  {
    pattern: /^(MenuItem|MenuItemGroup|SubMenu)$/,
    componentDir: 'menu',
  },
  {
    pattern: /^RadioGroup$/,
    componentDir: 'radio',
  },
  {
    pattern: /^(Option|Optgroup)$/,
    componentDir: 'select',
  },

  {
    pattern: /^(SkeletonLine|SkeletonShape)$/,
    componentDir: 'skeleton',
  },
  {
    pattern: /^Countdown$/,
    componentDir: 'statistic',
  },
  {
    pattern: /^Step$/,
    componentDir: 'steps',
  },
  {
    pattern: /^(Thead|Td|Th|Tr|Tbody|TableColumn)$/,
    componentDir: 'table',
  },
  {
    pattern: /^TagGroup$/,
    componentDir: 'tag',
  },
  {
    pattern: /^TabPane$/,
    componentDir: 'tabs',
  },
  {
    pattern: /^TimelineItem$/,
    componentDir: 'timeline',
  },
  {
    pattern: /^(TypographyParagraph|TypographyTitle|TypographyText)$/,
    componentDir: 'typography',
  },
];

// eslint-disable-next-line consistent-return
function getComponentStyleDir(
  importName: string,
  importStyle: boolean | 'css' | 'less'
): string | undefined {
  if (['ConfigProvider', 'Icon'].includes(importName)) return undefined;

  let componentDir = kebabCase(importName);
  for (const item of matchComponents) {
    if (item.pattern.test(importName)) {
      componentDir = item.componentDir;
      break;
    }
  }
  if (importStyle === 'less')
    return `@mb-design/web-vue/es/${componentDir}/style/index.js`;
  if (importStyle === 'css' || importStyle)
    return `@mb-design/web-vue/es/${componentDir}/style/css.js`;
}

interface MbResolverOptions {
  /**
   * import style css or less with components
   *
   * @default 'css'
   */
  importStyle?: boolean | 'css' | 'less';
  /**
   * resolve icons
   *
   * @default false
   */
  resolveIcons?: boolean;
  /**
   * Control style automatic import
   *
   * @default true
   */
  sideEffect?: boolean;
}

export default function MbResolver(
  options: MbResolverOptions = {}
): ComponentResolver {
  return {
    type: 'component',
    // eslint-disable-next-line consistent-return
    resolve: (name: string) => {
      if (options.resolveIcons && name.match(/^Icon/)) {
        return {
          name,
          from: '@mb-design/web-vue/es/icon',
        };
      }
      if (name.match(/^A[A-Z]/)) {
        const importStyle = options.importStyle ?? 'css';

        const importName = name.slice(1);
        const config: ComponentInfo = {
          name: importName,
          from: '@mb-design/web-vue',
        };
        if (options.sideEffect !== false)
          config.sideEffects = getComponentStyleDir(importName, importStyle);
        return config;
      }
    },
  };
}
