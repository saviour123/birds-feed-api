# birds-feed-api
Birds feed api provides access to data on birds. Its fun to do this abstract thing. This 
is a simple token based authentication api, which expires in some minutes. 
Its completely written with [Node](https://nodejs.org/en) and [hapi.js](https://hapijs.com/) frameworks.

## Dependencies.
"dependencies": {
    "babel-core": "^6.24.1",
    "hapi": "^16.1.1",
    "hapi-auth-jwt": "^4.0.0",
    "knex": "^0.12.9",
    "pg": "^6.1.5"
}

## Database
* Postgres

## Instructions

1. `git clone https://github.com/saviour123/birds-feed-api.git && cd birds-feed-api`
2. `npm install` //Install the dependencies
3. `$ sudo npm install -g knex`. //Install knex cli and create dbs with fun.
4. `knex migrate:latest` Migrate/create the database with love
5. `knex seed:run` //to add dummy data


## Start the Server
`$ npm start`

## Testing(any of your favourites): Recommended 
* [Postman](https://www.getpostman.com/)
* [httpie](https://httpie.org/)
