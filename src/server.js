import Hapi from 'hapi';
import Knex from './knex.js';

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
        key: 'vZiYpmTzqXMp8PpYXKwqc9ShQ1UhyAfy',
        verifyOptions:{
            algorithms: ['HS256'],
        }
    });
});


server.route({
    path: '/birds',
    method: 'GET',
    handler: (request, reply) => {
        const getOperation = Knex('birds').where({

            isPublic: true

        }).select('name', 'species', 'picture_url').then((results) => {
            if(!results || results.length === 0){
                
                reply({
                    error: true,
                    errMessage: 'no public bird found',
                });
            }

            reply({
                dataCount: results.length,
                data: results,
            });
        
        });
    }
});

server.route({
    path: '/auth',
    method: 'POST',
    handler: (request, reply) => {
        const {username, password} = request.payload;
        // const username = request.payload.username; es6
        
        const getOperation = Knex('users').where({
            username,
        }).select('guid', 'password').then([user]) => {
            if(!user){
                reply({
                    error: true,
                    errMessage: 'the user is not found',
                });
                return;
            }
        }).catch((err) => {
            reply('server-error');
        });

        if(user.password === password){
            const token = jwt.sign({
                
            });
        }
    }
});


//start server
server.start((err) => {
    if(err){
        throw err;
    }
    console.log('server running at:' + server.info.uri);
});



