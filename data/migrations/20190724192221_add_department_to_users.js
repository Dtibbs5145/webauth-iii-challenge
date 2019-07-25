
exports.up = function(knex) {
  return knex.schema.table('users', tbl => {
      tbl.string('department', 120);
  })
};

exports.down = function(knex) {
    return knex.schema.table('users', tbl => {
        tbl.dropColumn('department');
    })
};