exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('pairs').del()
    .then(function () {
      // Inserts seed entries
      return knex('pairs').insert([
        {id: 1, name: 'ETH_USD', custom_alias: 'ETH', description: '', default_pair: 1},
        {id: 2, name: 'BTC_USD', custom_alias: 'BTC', description: '', default_pair: null},
        {id: 3, name: 'LTC_USD', custom_alias: 'LTC', description: '', default_pair: null}
      ])
    })
}
