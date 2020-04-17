
exports.up = function (knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('id')
        tbl.string('name', 128).notNullable().unique()
        tbl.string('description', 255)
        tbl.boolean('complete').defaultTo(false)
    })
        .createTable('resources', tbl => {
            tbl.increments()
            tbl.string('name').notNullable().unique()
            tbl.string('description', 255)
        })
        .createTable('tasks', tbl => {
            tbl.increments('id')
            tbl.string('description', 255).notNullable()
            tbl.string('notes', 255)
            tbl.integer('project_id').notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        .createTable('project_resources', tbl => {
            tbl.increments('id')
            tbl.integer('project_id')
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.integer('resource_id')
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    knex.schema
        .dropTable('project_resources')
        .dropTable('tasks')
        .dropTable('resources')
        .dropTable('projects')
};
