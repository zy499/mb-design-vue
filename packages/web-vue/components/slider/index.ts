import type { App } from 'vue';
import type { MbOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _Slider from './slider.vue';

const Slider = Object.assign(_Slider, {
  install: (app: App, options?: MbOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _Slider.name, _Slider);
  },
});

export type SliderInstance = InstanceType<typeof _Slider>;

export default Slider;
