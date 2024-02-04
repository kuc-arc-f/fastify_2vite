import fastify from 'fastify';
import path from 'node:path';
import { fileURLToPath } from 'url';
import fastifyStatic from '@fastify/static';
//
import { renderToString } from 'react-dom/server';
import Top from './pages/App';
//
const __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);
//
const app = async () => {
console.log("env=", process.env.NODE_ENV);
  if(process.env.NODE_ENV === 'develop'){
    __dirname = __dirname.replace("/src", '');
  }else{
    __dirname = __dirname.replace("/dist", '');
  }
//console.log("__dirname=", __dirname);
  const app = fastify();
  //static-setting
  app.register(fastifyStatic, {
    root: path.join(__dirname, 'public/static/'),
    prefix: '/public/static/', // optional: default '/'
  });
  app.get('/ping', (req, reply) => {
    reply.send({ msg: 'pong' });
  });
  app.get('/pong', (req, reply) => {
    reply.send({ msg: 'ping' });
  });
  //
  app.get('/test', (req, reply) => {
    reply.type('text/html');
    reply.send(renderToString(Top()));
  });
  app.get('/', (req, reply) => {
    reply.send('change me to see updates, fastify!~');
  });
  //
  if (import.meta.env.PROD)
    app.listen(3000);

  return app;
};

export const viteNodeApp = app();