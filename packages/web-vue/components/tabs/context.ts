import { InjectionKey } from 'vue';
import { TabData } from './interface';

export interface TabsContext {
  lazyLoad: boolean;
  destroyOnHide: boolean;
  activeKey: string | number;
  addItem: (id: number, data: TabData) => void;
  removeItem: (id: number) => void;
}

export const tabsInjectionKey: InjectionKey<TabsContext> = Symbol('MbTabs');
