require("dotenv").config();
var express = require("express");
var path = require("path");


var PORT = process.env.PORT || 1017;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");
app.use("/",routes);

app.get("*", function(req, res){
  res.sendfile(path.join(__dirname, "../burger/views/index.handlebars"));
});


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
