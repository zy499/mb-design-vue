<template>
  <footer class="mb-site-footer">
    <div class="mb-site-footer-main">
      <div class="mb-site-footer-content">
        <div class="mb-site-footer-logo">
          <logo />
        </div>
        <div class="mb-site-relevant">
          <div
            v-for="(group, index) of relevant"
            :key="index"
            class="mb-site-relevant-group"
          >
            <div class="mb-site-relevant-title">
              {{ t(`footer.${group.title}`) }}
              <icon-down />
            </div>
            <ul class="mb-site-relevant-list">
              <li
                v-for="(item, itemIndex) of group.list"
                :key="itemIndex"
                class="mb-site-relevant-item"
              >
                <a v-if="item.link" :href="item.link">
                  {{ t(`footer.${item.text}`) }}
                </a>
                <span v-else @click="toBeOpen">
                  {{ t(`footer.${item.text}`) }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mb-site-footer-bottom">
        <div class="mb-site-footer-bottom-left">
          <a class="mb-site-footer-btn" href="/">
            <span class="mb-site-footer-icon">
              <span class="mb-site-footer-icon-gray">
                <icon-mb />
              </span>
              <span class="mb-site-footer-icon-color">
                <icon-mb-color />
              </span>
            </span>
            Powered by MbDesign
          </a>
          <div class="mb-site-footer-copyright">
            <span>GIP UED & 架构前端 </span>
            <span>ⓒ Copyright ByteDance 2019-{{ latestYear }}</span>
          </div>
        </div>
        <!-- <div class="mb-site-footer-bottom-right">
          <a target="_blank" rel="noreferrer" href="https://beian.miit.gov.cn/">
            京ICP备19059916号-18
          </a>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { Message } from '@web-vue/components/index';
import joinChat from '../../utils/join-chart';
import IconMb from '../../assets/footer/mb.svg';
import IconMbColor from '../../assets/footer/mb-color.svg';
import Logo from '../logo/index.vue';

export default defineComponent({
  name: 'MbFooter',
  components: {
    IconMb,
    IconMbColor,
    Logo,
  },
  setup() {
    const { t } = useI18n();

    const relevant = [
      // {
      //   title: 'design',
      //   list: [
      //     {
      //       text: 'spec',
      //       link: '/docs/spec/introduce',
      //     },
      //     {
      //       text: 'principle',
      //       link: '/docs/spec/philosophy',
      //     },
      //   ],
      // },
      {
        title: 'component',
        list: [
          // {
          //   text: 'overview',
          //   link: '/vue/components/overview',
          // },
          {
            text: 'start',
            link: '/vue/docs/start',
          },
          {
            text: 'changelog',
            link: '/vue/docs/changelog',
          },
        ],
      },
      {
        title: 'ecosystem',
        list: [
          // {
          //   text: 'designLab',
          //   link: '/themes/stores',
          // },
          // {
          //   text: 'material',
          //   link: '/material',
          // },
          {
            text: 'pro',
            link: '/pro',
          },
        ],
      },
      {
        title: 'resource',
        list: [
          {
            text: 'componentFigma',
            link: '/',
          },
          {
            text: 'iconFigma',
            link: '/',
          },
        ],
      },
      // {
      //   title: 'about',
      //   list: [
      //     {
      //       text: 'dashboard',
      //       link: '/dashboard',
      //     },
      //   ],
      // },
    ];

    const toBeOpen = () => {
      Message.info('Opening soon');
    };

    const latestYear = new Date().getFullYear();

    return {
      t,
      relevant,
      toBeOpen,
      joinChat,
      latestYear,
    };
  },
});
</script>

<style lang="less" src="./style.less" />
