exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('test', function(table){
      table.increments('id');
      table.string('description');
      table.date('date_achieved');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('test')
  ])
};