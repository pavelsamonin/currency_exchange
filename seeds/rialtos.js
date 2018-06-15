exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('rialtos').del()
        .then(function () {
            // Inserts seed entries
            return knex('rialtos').insert([
                {id: 1, name: 'EXMO'},
                {id: 2, name: 'Kraken'},
                {id: 3, name: 'Poloniex'}
            ]);
        });
};