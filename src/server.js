import Hapi from 'hapi';
import Knex from './knex.js';
import routes from './routes';

const server = new Hapi.Server();
server.connection({port: 1337});

// test route
server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('hello world');
    }
});


// registers a module inside the instance of the api
server.register(require('hapi-auth-jwt'), (err) => {
    server.auth.strategy('token', 'jwt', {
        key: 'myLongPasswordSaviour1234',
        verifytions:{
            algorithms: ['HS256'],
        }
    });

    routes.forEach((route) => {
        console.log(`attaching ${route.path}` );
        server.route(route);
    }); 

});





//start server
server.start(err => {
    if(err){
        console.error(error);
    }
    console.log('server started at ' + server.info.uri );
});
