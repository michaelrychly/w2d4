const settings = require("./settings");
const first_name_in  = process.argv[2];
const last_name_in  = process.argv[3];
const birth_date_in  = process.argv[4];

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database,
  }
});

knex('famous_people').insert({first_name: first_name_in,
  last_name: last_name_in,
  birthdate: birth_date_in})
.catch(function(err){
  console.error()})
//knex.destroy();