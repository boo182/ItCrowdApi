import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import router from './routes';

const app = new Koa();
app.use(cors());

  app.use(bodyParser());
  app.use(router())

  app.listen('3005', (port) => console.log('listening on port 3005'));

  module.export = app;