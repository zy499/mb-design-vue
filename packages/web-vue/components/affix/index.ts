import type { App } from 'vue';
import type { MbOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _Affix from './affix.vue';

const Affix = Object.assign(_Affix, {
  install: (app: App, options?: MbOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _Affix.name, _Affix);
  },
});

export type AffixInstance = InstanceType<typeof _Affix>;

export default Affix;
