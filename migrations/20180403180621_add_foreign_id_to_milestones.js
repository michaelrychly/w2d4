exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table){
      table.integer('foreign_id').unsigned();
      table.foreign('foreign_id').references('famous_people.id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('milestones', function(table){
      knex.schema.dropColumn('foreign_id');
    })
  ])
};