
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'get rich' },
        { name: 'pretend i dont know nobody' },
        { name: 'hah hah hah' }
      ]);
    });
};
