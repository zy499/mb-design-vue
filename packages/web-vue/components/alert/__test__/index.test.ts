import { mount } from '@vue/test-utils';
import Alert from '../index';

describe('Alert', () => {
  test('should emit event', async () => {
    const wrapper = mount(Alert, {
      props: {
        closable: true,
      },
    });

    const closeBtn = wrapper.find('.mb-alert-close-btn');
    await closeBtn.trigger('click');
    expect(wrapper.emitted('close')).toHaveLength(1);
  });

  test('should type props', async () => {
    const wrapper = mount(Alert);

    await wrapper.setProps({ type: 'info' });
    expect(wrapper.find('.mb-alert-info').exists()).not.toBe(null);

    await wrapper.setProps({ type: 'success' });
    expect(wrapper.find('.mb-alert-success').exists()).not.toBe(null);

    await wrapper.setProps({ type: 'warning' });
    expect(wrapper.find('.mb-alert-warning').exists()).not.toBe(null);

    await wrapper.setProps({ type: 'error' });
    expect(wrapper.find('.mb-alert-error').exists()).not.toBe(null);
  });
});
