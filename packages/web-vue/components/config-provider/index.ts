import type { App } from 'vue';
import type { MbOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _ConfigProvider from './config-provider.vue';

const ConfigProvider = Object.assign(_ConfigProvider, {
  install: (app: App, options?: MbOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _ConfigProvider.name, _ConfigProvider);
  },
});

export type ConfigProviderInstance = InstanceType<typeof _ConfigProvider>;

export default ConfigProvider;
