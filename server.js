var express = require("express");
var bodyParser = require("body-parser");

// Set handlebars
var exphbs = require("express-handlebars");

// import routes and give the server access to them
var routes = require("./controllers/burgersController.js");

var PORT = process.env.PORT || 8080;

var app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

app.engine("handlebars" , exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT ,function(){
	console.log("App listening on localhost : " + PORT);
});