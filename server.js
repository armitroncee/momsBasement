const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require("./routes/html-routes");
var exphbs = require("express-handlebars");
var path = require("path")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

const databaseUri = "mongodb://localhost/momsbasement";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
};

const dbm = mongoose.connection;

dbm.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

dbm.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/', routes);

app.listen(PORT, function(){
    console.log("App listening on port " + PORT)
});