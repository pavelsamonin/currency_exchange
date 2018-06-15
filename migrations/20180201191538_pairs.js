
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('pairs', function (t) {
      t.increments('id').unsigned().primary()
      t.string('name').notNull()
      t.string('custom_alias').notNull()
      t.string('description').notNull()
      t.boolean('default_pair')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('pairs')
  ])
};
