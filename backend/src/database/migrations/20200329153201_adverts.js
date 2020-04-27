
exports.up = function(knex) {
    return knex.schema.createTable('adverts', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.decimal('telephone').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.string('employee_id').notNullable();
        table.string('category_id').notNullable();
        table.foreign('category_id').references('id').inTable('category');
        table.foreign('employee_id').references('id').inTable('users_employee');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('adverts');
};
