var mysql = require("mysql");

var connection = mysql.createConnection({
	port : 3306,
	user: "c1ha5iclcppk2zp4",
	host: "otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	password: "rtk09t66titkatsy",
	database: "v3t78lyxu3y727zd"
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
