import type { App } from 'vue';
import { getCurrentInstance, inject } from 'vue';
import { configProviderInjectionKey } from '../config-provider/context';
import type { MbOptions } from './types';

const COMPONENT_PREFIX = 'A';
const CLASS_PREFIX = 'mb';
const GLOBAL_CONFIG_NAME = '$mb';

export const getComponentPrefix = (options?: MbOptions) => {
  return options?.componentPrefix ?? COMPONENT_PREFIX;
};

export const setGlobalConfig = (app: App, options?: MbOptions): void => {
  if (options && options.classPrefix) {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
      ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
      classPrefix: options.classPrefix,
    };
  }
};

export const getPrefixCls = (componentName?: string): string => {
  const instance = getCurrentInstance();
  const configProvider = inject(configProviderInjectionKey, undefined);

  const prefix =
    configProvider?.prefixCls ??
    instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]
      ?.classPrefix ??
    CLASS_PREFIX;
  if (componentName) {
    return `${prefix}-${componentName}`;
  }
  return prefix;
};
