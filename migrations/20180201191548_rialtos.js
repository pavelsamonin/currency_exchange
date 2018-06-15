
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('rialtos', function (t) {
      t.increments('id').unsigned().primary()
      t.string('name').notNull()
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('rialtos')
  ])
};
