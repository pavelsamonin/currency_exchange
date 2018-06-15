
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('currency', function (t) {
      t.increments('id').unsigned().primary()
      t.integer('rialto').unsigned().references('id').inTable('rialtos')
      t.integer('pair').unsigned().references('id').inTable('pairs')
      t.timestamp('date').defaultTo(knex.fn.now())
      t.decimal('av_price', 18, 8)
      t.decimal('buy_price', 18, 8)
      t.decimal('sell_price', 18, 8)
      t.index('date');
      t.index('rialto');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('currency')
  ])
};
