import type { App } from 'vue';
import type { MbOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _Transfer from './transfer.vue';

const Transfer = Object.assign(_Transfer, {
  install: (app: App, options?: MbOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _Transfer.name, _Transfer);
  },
});

export type TransferInstance = InstanceType<typeof _Transfer>;

export default Transfer;
