import type { App } from 'vue';
import type { MbOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _Space from './space';

const Space = Object.assign(_Space, {
  install: (app: App, options?: MbOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _Space.name, _Space);
  },
});

export type SpaceInstance = InstanceType<typeof _Space>;

export default Space;
