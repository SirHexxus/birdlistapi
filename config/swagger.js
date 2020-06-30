exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'Fastify API',
            description: 'a REST api to retreive information on local birds. Uses Fastify, Node.js, MongoDB, and Swagger',
            version: '1.0.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'More info here'
        },
        host: 'localhost',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    }
}