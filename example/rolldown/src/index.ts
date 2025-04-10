import fastify from 'fastify';
import path from 'node:path';
import { fileURLToPath } from 'url';
import fastifyStatic from '@fastify/static';
import { renderToString } from 'react-dom/server';
// router
import routerTest from './routes/test';
// SSR
import Top from './pages/App';

const __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);
if(__dirname.indexOf("/dist") >= 0){
  __dirname = __dirname.replace("/dist", '');
}
//console.log("__dirname=",  __dirname );

const fastify = require('fastify')({ logger: true });
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public/static/'),
  prefix: '/public/static/', // optional: default '/'
});
fastify.get('/test', (req, reply) => {
  reply.type('text/html');
  reply.send(renderToString(Top()));
});
/*
API 
*/
fastify.get('/api/test1', async (req, reply) => {
  const ret = await routerTest.test1(req, reply);
  reply.send(ret)
});
fastify.post('/api/send_post', async (req, reply) => {
  const ret = await routerTest.sendPost(req, reply);
  reply.send(ret)
});

// SPA
fastify.get('/*', (req, reply) => {
  reply.type('text/html');
  reply.send(renderToString(Top()));
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

