const pg = require("pg");
const settings = require("./settings");
const name  = process.argv[2];

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * from famous_people where first_name = $1", [name], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Searching...");
    console.log(`Found ${result.rows.length} person by the name of ${name}:`);
    let i = 1;
    result.rows.forEach(function(element) {
      console.log(` - ${i}: ${element.first_name} ${element.last_name}, born: ${element.birthdate.toISOString().slice(0,10)}`);
    });
    client.end();
  });
});