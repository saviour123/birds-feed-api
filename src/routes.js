import Knex from './knex';
import jwt from 'jsonwebtoken';
import GUID from 'node-uuid';


const routes = [
{
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
},

{
    path: '/auth',
    method: 'POST',
    handler: (request, reply) => {
        const {username, password} = request.payload;
        const getOperation = Knex('users').where({
            username,
        }).select('guid', 'password').then(([user]) => {
            if(!user){
                reply({
                    error: true,
                    errMessage: 'user not found'
                });
                return;
            }
            if(user.password = password){
                const token = jwt.sign({
                    username, 
                    scope: user.guid,
                }, 'myLongPasswordSaviour1234', {
                    algorithm: 'HS256',
                    expiresIn: '1h',
                });
                reply({
                    token,
                    scope: user.guid,
                });
            }else{
                reply('incorrect password');
            }
        });
    }

}

]

export default routes;
