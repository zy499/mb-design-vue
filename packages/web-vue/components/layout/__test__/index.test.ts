import { mount } from '@vue/test-utils';
import Layout from '../index';

const { Sider } = Layout;

const _matchMedia = window.matchMedia;

describe('Layout', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: _matchMedia,
    });
  });

  test('Collapse should work for Sider', async () => {
    const wrapper = mount(Sider, {
      props: {
        collapsible: true,
      },
    });
    expect(wrapper.find('.mb-layout-sider').attributes('style')).toContain(
      'width: 200px'
    );
    const collapseTrigger = wrapper.find('.mb-layout-sider-trigger');
    await collapseTrigger.trigger('click');
    expect(wrapper.find('.mb-layout-sider').attributes('style')).toContain(
      'width: 48px'
    );
    expect(wrapper.emitted('collapse')).toHaveLength(1);
  });
});
