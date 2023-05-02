const fp = require('fastify-plugin');

module.exports = fp(function (fastify, opts, done) {
    fastify
    // .register(require('./env'), opts)
        .after(() => {
            fastify.register(require('./routes'))
        });
    done();
});
