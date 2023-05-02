// const { create, queryByProperty } = require('../db');
// const { TABLES } = require('@lario/db-models');
const usersSchema = require('../../schema/users');
const users = require('./data');

async function routes(fastify) {
  // LIST USERS
  fastify.get(
      '',
      {
          schema: usersSchema.list,
      },
      async (_, reply) => {
          try {
              reply.code(200).send(users);
          } catch (err) {
              fastify.log.error(err);
              reply.code(500).send({ errorMsg: 'Unexpected error' });
          }
      },
  );
}

module.exports = routes;
