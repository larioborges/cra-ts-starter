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
        const userMatches = users.filter(u => u.id == userId)

        if (userMatches.length === 0) {
            reply.code(404).send({ errorMsg: 'there is no user with that user ID' });
        } else if (userMatches.length > 1) {
            reply.code(500).send({ errorMsg: 'More than 1 user with a matching ID was found' });
        } else {
          try {
              reply.code(200).send(userMatches[0]);
          } catch (err) {
              fastify.log.error(err);
              reply.code(500).send({ errorMsg: 'Unexpected error' });
          }
        }
      },
  );

  // TODO Lario: ADD USER
  //   fastify.post(
  //     '',
  //     {
  //         schema: SIGNUP_SCHEMA,
  //     },
  //     async (request, reply) => {
  //         const user = await queryByProperty(fastify, TABLES.USERS, {
  //             email: request.body.emailAddress,
  //         });
  //         if (user) {
  //             reply.code(500).send({ errorMsg: 'User email already exists!' });
  //             return;
  //         }

  //         try {
  //             const hashedPassword = await fastify.bcrypt.hash(request.body.password);
  //             const token = fastify.jwt.sign({  });

  //             await create(fastify, TABLES.USERS, {
  //                 email: request.body.emailAddress,
  //                 firstName: request.body.firstName,
  //                 lastName: request.body.lastName,
  //                 hashedPassword,
  //             });

  //             reply.code(200).send({
  //                 authToken: token,
  //             });
  //         } catch (e) {
  //             reply.code(500).send({ errorMsg: e });
  //             fastify.log.fatal("Signup failed");
  //             throw e;
  //         }
  //     },
  // );

  // TODO Lario: UPDATE USER
  // fastify.put(
  //     '/signup',
  //     {
  //         schema: SIGNUP_SCHEMA,
  //     },
  //     async (request, reply) => {
  //         const user = await queryByProperty(fastify, TABLES.USERS, {
  //             email: request.body.emailAddress,
  //         });
  //         if (user) {
  //             reply.code(500).send({ errorMsg: 'User email already exists!' });
  //             return;
  //         }

  //         try {
  //             const hashedPassword = await fastify.bcrypt.hash(request.body.password);
  //             const token = fastify.jwt.sign({  });

  //             await create(fastify, TABLES.USERS, {
  //                 email: request.body.emailAddress,
  //                 firstName: request.body.firstName,
  //                 lastName: request.body.lastName,
  //                 hashedPassword,
  //             });

  //             reply.code(200).send({
  //                 authToken: token,
  //             });
  //         } catch (e) {
  //             reply.code(500).send({ errorMsg: e });
  //             fastify.log.fatal("Signup failed");
  //             throw e;
  //         }
  //     },
  // );

  // TODO Lario: DELETE USER
  // fastify.delete(
  //     '/signup',
  //     {
  //         schema: SIGNUP_SCHEMA,
  //     },
  //     async (request, reply) => {
  //         const user = await queryByProperty(fastify, TABLES.USERS, {
  //             email: request.body.emailAddress,
  //         });
  //         if (user) {
  //             reply.code(500).send({ errorMsg: 'User email already exists!' });
  //             return;
  //         }

  //         try {
  //             const hashedPassword = await fastify.bcrypt.hash(request.body.password);
  //             const token = fastify.jwt.sign({  });

  //             await create(fastify, TABLES.USERS, {
  //                 email: request.body.emailAddress,
  //                 firstName: request.body.firstName,
  //                 lastName: request.body.lastName,
  //                 hashedPassword,
  //             });

  //             reply.code(200).send({
  //                 authToken: token,
  //             });
  //         } catch (e) {
  //             reply.code(500).send({ errorMsg: e });
  //             fastify.log.fatal("Signup failed");
  //             throw e;
  //         }
  //     },
  // );
}

module.exports = routes;
