import { mount } from '@vue/test-utils';
import Divider from '../index';

describe('Divider', () => {
  test('Should work on both direction', async () => {
    const wrapper = mount(Divider, {
      props: {
        direction: 'horizontal',
      },
    });
    expect(wrapper.find('.mb-divider-horizontal').exists()).toBe(true);
    await wrapper.setProps({ direction: 'vertical' });
    expect(wrapper.find('.mb-divider-vertical').exists()).toBe(true);
  });
});
