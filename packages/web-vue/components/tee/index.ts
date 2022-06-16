import type { App } from 'vue';
import type { MbOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _Tee from './tee.vue';

const Tee = Object.assign(_Tee, {
  install: (app: App, options?: MbOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _Tee.name, _Tee);
  },
});

export type TeeInstance = InstanceType<typeof _Tee>;

export default Tee;
