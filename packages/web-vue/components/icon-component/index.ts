import type { App } from 'vue';
import type { MbOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _Icon from './icon.vue';
import { addFromIconFontCn } from './add-from-icon-font-cn';

const Icon = Object.assign(_Icon, {
  addFromIconFontCn,
  install: (app: App, options?: MbOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _Icon.name, _Icon);
  },
});

export type IconInstance = InstanceType<typeof _Icon>;
export type IconProps = IconInstance['$props'];

export default Icon;
