
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {Username: 'Bilbo', department: 'shire'},
        {Username: 'Sam', department: 'shire'},
        {Username: 'Frodo', department: 'shire'},
        {Username: 'Legolas', department: 'Mirkwood'},
        {Username: 'Aragorn', department: 'Ranger'},
        {Username: 'Denathor', department: 'Gondor'}
      ]);
    });
};
