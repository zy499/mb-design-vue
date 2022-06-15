import type { App } from 'vue';
import type { MbOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _PageHeader from './page-header.vue';

const PageHeader = Object.assign(_PageHeader, {
  install: (app: App, options?: MbOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _PageHeader.name, _PageHeader);
  },
});

export type PageHeaderInstance = InstanceType<typeof _PageHeader>;

export default PageHeader;
