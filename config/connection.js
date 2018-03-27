var mysql = require("mysql");

var connection = mysql.createConnection({
	port : 3308,
	user: "root",
	host: "localhost",
	password: "root",
	database: "burger_db"
});

connection.connect(function(err){
	if(err) {
		console.log("error " + err.stack);
		return;
	}
	console.log("connected as ID : " + connection.threadId);
});
// Export connection for our ORM to use.
module.exports = connection;
