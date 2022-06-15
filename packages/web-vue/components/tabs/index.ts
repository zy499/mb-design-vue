import type { App } from 'vue';
import type { MbOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _Tabs from './tabs';
import _TabPane from './tab-pane.vue';

const Tabs = Object.assign(_Tabs, {
  TabPane: _TabPane,
  install: (app: App, options?: MbOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _Tabs.name, _Tabs);
    app.component(componentPrefix + _TabPane.name, _TabPane);
  },
});

export type TabsInstance = InstanceType<typeof _Tabs>;
export type TabPaneInstance = InstanceType<typeof _TabPane>;

export { _TabPane as TabPane };

export default Tabs;
