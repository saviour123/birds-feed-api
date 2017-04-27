export default require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'sav',
        password: 'sav',
        database: 'birdbase',
        charset: 'utf8',
    }
});
