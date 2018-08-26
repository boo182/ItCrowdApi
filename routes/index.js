import compose from 'koa-compose';
import postsRouter from './posts';

export default function router() {
  return compose([
    postsRouter.middleware(),
  ]);
}