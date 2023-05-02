const developmentEnv = process.env.ENV ? process.env.ENV : 'local';
const rootDir = `${__dirname}/..`;

const loggerConfig = {
  redact: ['headers.authorization', 'body.email', 'body.name'],
  serializers: {
      res(reply) {
          return {
              statusCode: reply.statusCode,
          };
      },
      req(request) {
          return {
              method: request.method,
              url: request.url,
              path: request.routerPath,
              parameters: request.params,
              headers: request.headers,
          };
      },
  },
  mixin: () => {
      return {
          app: 'API Server',
          env: developmentEnv,
      };
  },
}

if (developmentEnv === 'local') {
  loggerConfig.transport = {
      target: 'pino-pretty',
      options: {
          colorize: true,
          destination: 1,
      },
  };
} else {
  loggerConfig.file = `${rootDir}/logs/api-server.log`;
}

module.exports = {
  redact: ['headers.authorization', 'body.email', 'body.name'],
  serializers: {
      res(reply) {
          return {
              statusCode: reply.statusCode,
          };
      },
      req(request) {
          return {
              method: request.method,
              url: request.url,
              path: request.routerPath,
              parameters: request.params,
              headers: request.headers,
          };
      },
  },
  mixin: () => {
      return {
          app: 'API Server',
      };
  },
};
