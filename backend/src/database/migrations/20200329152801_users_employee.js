
exports.up = function(knex) {
    return knex.schema.createTable('users_employee', function(table){

        table.string('id').primary()
        table.string('name').notNullable();
        table.string('username').unique();
        table.string('password').notNullable()
        table.string('rg').notNullable();
        table.string('cpf').notNullable();
        table.string('email').notNullable();
        table.decimal('telephone').notNullable();
        table.string('city').notNullable();
        table.string('street').notNullable();
        table.string('zipcode').notNullable();
        table.string('uf', 2).notNullable();
        table.string('description').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users_employee');
};
