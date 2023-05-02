const Fastify = require('fastify');
const uuid = require('uuid').v4;
const addDecorators = require('./decorators/addDecorators');
const addHooks = require('./hooks/addHooks');
const registerPlugins = require('./plugins');

const loggerConfig = require('./loggerConfig');

loggerConfig.transport = {
  target: 'pino-pretty',
  options: {
      colorize: true,
      destination: 1,
  },
};

const main = async () => {
  const fastify = Fastify({
      genReqId() {
          return uuid();
      },
      logger: loggerConfig,
  });

  addDecorators(fastify);
  addHooks(fastify);

  fastify.register(registerPlugins);

  fastify.listen(4000, (err, address) => {
      if (err) {
          fastify.log.fatal(err);
          throw 'Could not start up server';
      }
      fastify.log.info(`Server listening at ${address}`);
  });
}

try {
  main();
} catch(err) {
  console.log(err);
  process.exi(1);
};
