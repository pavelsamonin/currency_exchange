exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('flat_currency', function (t) {
      t.increments('guid').primary()
      t.string('name')
      t.integer('id')
      t.decimal('value', 18, 8)
      t.timestamp('date').defaultTo(knex.fn.now())
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('flat_currency')
  ])
};
