// const { create, queryByProperty } = require('../db');
// const { TABLES } = require('@lario/db-models');
const usersSchema = require('../../schema/users');
const { users, getUserById, deleteUserById, addUser, getActiveUsers } = require('./data');

async function routes(fastify) {
  // LIST USERS
  fastify.get(
    '',
    {
      schema: usersSchema.list,
    },
    async (_, reply) => {
      try {
        reply.code(200).send(getActiveUsers(users));
      } catch (err) {
        fastify.log.error(err);
        reply.code(500).send({ errorMsg: 'Uneqxpected error' });
      }
    },
  );

  // GET USER
    fastify.get(
      '/:userId',
      {
          schema: usersSchema.get,
      },
      async (request, reply) => {
        const { userId } = request.params;
        const { user, responseCode, errorMsg } = getUserById(users, userId);

        if (user) {
          reply.code(responseCode).send(user);
        } else {
          reply.code(responseCode).send(errorMsg);
        }
      },
  );

  // ADD USER
    fastify.post(
      '',
      {
          schema: usersSchema.create,
      },
      async (request, reply) => {
        try {
          const newUser = addUser(users, request.body)
          reply.code(200).send(newUser);
        } catch (err) {
          fastify.log.error(err);
          reply.code(500).send({ errorMsg: 'Uneqxpected error' });
        }
      },
  );

  // TODO Lario: UPDATE USER
  fastify.put(
      '',
      {
          schema: usersSchema.update,
      },
      async (request, reply) => {
        const { updatedUser, responseCode, errorMsg } = updateUser(users, request.body);
        if (updatedUser) {
          reply.code(responseCode).send(updatedUser);
        } else {
          reply.code(responseCode).send(errorMsg);
        }
      },
  );

  // DELETE USER
  fastify.delete(
      '/:userId',
      {
          schema: usersSchema.delete,
      },
      async (request, reply) => {
        const { userId } = request.params;
        const { deletedUserId, responseCode, errorMsg } = deleteUserById(users, userId);

        if (deletedUserId) {
          reply.code(responseCode).send(deletedUserId);
        } else {
          reply.code(responseCode).send(errorMsg);
        }
      },
  );
}

module.exports = routes;
