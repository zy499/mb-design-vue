import type { App } from 'vue';
import type { MbOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _Comment from './comment.vue';

const Comment = Object.assign(_Comment, {
  install: (app: App, options?: MbOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _Comment.name, _Comment);
  },
});

export type CommentInstance = InstanceType<typeof _Comment>;

export default Comment;
