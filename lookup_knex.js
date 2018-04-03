const settings = require("./settings");
const name  = process.argv[2];

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database,
  }
});

knex.select('*').from('famous_people')
.limit(10)
.asCallback(function(err, rows) {
  if (err) return console.error(err);
  knex.select('*').from('famous_people')
    .where('first_name',(rows, name))
    .asCallback(function(err, rows) {
      if (err) return console.error(err);
      console.log("Searching...");
      console.log(`Found ${rows.length} person by the name of ${name}:`);
      let i = 1;
      rows.forEach(function(element) {
      console.log(` - ${i}: ${element.first_name} ${element.last_name}, born: ${element.birthdate.toISOString().slice(0,10)}`);
    });
    });
  knex.destroy();
});