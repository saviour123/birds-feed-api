
exports.up = function(knex, Promise) {
    return knex
        .schema
        .createTable('users', function(usersTable){
            // primary key
            usersTable.increments();

            // Data
            usersTable.string('name', 50).notNullable();
            usersTable.string('username', 50).notNullable().unique();
            usersTable.string('email').notNullable().unique();
            usersTable.string('password').notNullable();
            usersTable.string('guid').notNullable().unique();

            usersTable.timestamp('created_at').notNullable();
        })

    .createTable('birds', function(birdsTable){
        // Primary key
        birdsTable.increments();
        birdsTable.string('owner', 36).references('guid').inTable('users');
        
        // Data
        birdsTable.string('name', 250).notNullable();
        birdsTable.string('species', 250).notNullable();
        birdsTable.string('picture_url', 250).notNullable();
        birdsTable.string('guid', 36).notNullable().unique();
        birdsTable.string('isPublic').notNullable().defaultTo(true);
        
        birdsTable.timestamp('created_at').notNullable();
        
    });


};

exports.down = function(knex, Promise) {
    return knex
        .schema
            .dropTableIfExists('birds')
            .dropTableIfExists('users');
};
