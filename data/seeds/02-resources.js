
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'cool looking teeth' },
        { name: 'mullet' },
        { name: 'big truck' }
      ]);
    });
};
