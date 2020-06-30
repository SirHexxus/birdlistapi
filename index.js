// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
});
// Require external modules
const mongoose = require('mongoose');
// Import Swagger Options
const swagger = require('./config/swagger')
// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)
// Require routes
const routes = require('./routes');
// Declare PORT variable
const PORT = 3000;

// Declare routes
routes.forEach((route, index) => {
    fastify.route(route);
});

// Connect to DB
mongoose.connect('mongodb://localhost/mycargarage')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

// Run the server!
const start = async () => {
    try {
        await fastify.listen(PORT);
        fastify.swagger;
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
start();
