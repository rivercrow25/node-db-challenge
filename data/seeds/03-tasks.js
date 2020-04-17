
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description: 'im too lazy to make these unique', project_id: '1' },
        { description: 'im too lazy to make these unique', project_id: '1' },
        { description: 'im too lazy to make these unique', project_id: '1' },
        { description: 'im too lazy to make these unique', project_id: '2' },
        { description: 'im too lazy to make these unique', project_id: '2' },
        { description: 'im too lazy to make these unique', project_id: '3' },
      ]);
    });
};
