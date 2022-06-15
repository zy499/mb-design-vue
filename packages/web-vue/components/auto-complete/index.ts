import type { App } from 'vue';
import type { MbOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _AutoComplete from './auto-complete';

const AutoComplete = Object.assign(_AutoComplete, {
  install: (app: App, options?: MbOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _AutoComplete.name, _AutoComplete);
  },
});

export type AutoCompleteInstance = InstanceType<typeof _AutoComplete>;

export default AutoComplete;
