import { InjectionKey, Slots } from 'vue';
import { MbLang } from '../locale/interface';
import { Size } from '../_utils/constant';

export interface ConfigProvider {
  slots: Slots;
  prefixCls?: string;
  locale?: MbLang;
  size?: Size;
  updateAtScroll?: boolean;
}

export const configProviderInjectionKey: InjectionKey<ConfigProvider> =
  Symbol('MbConfigProvider');
