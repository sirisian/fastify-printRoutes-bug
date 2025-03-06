import Fastify from 'fastify';

const fastify = Fastify({});

fastify.get('/fooupdate', {}, async (request, reply) => {});
fastify.get('/foodelete', {}, async (request, reply) => {});
fastify.get('/buildpatch', {}, async (request, reply) => {});
fastify.get('/buildpatchexperimental', {}, async (request, reply) => {});
fastify.get('/mymethod', {}, async (request, reply) => {});
fastify.get('/mymethod42', {}, async (request, reply) => {});

console.log('commonPrefix: true');
console.log(fastify.printRoutes({ commonPrefix: true }));
console.log('commonPrefix: false');
console.log(fastify.printRoutes({ commonPrefix: false }));
