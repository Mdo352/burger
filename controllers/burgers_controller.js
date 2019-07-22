var express = require("express");

var router = express.Router();

var burger = require("../models/burger")

router.get("/", function(req, res) {
  burger.all(function(burgerData){
      console.log(burgerData);
    res.render("index", {burgerData} );
  })
});

router.put("/burgers/update", function(req, res){
  var condition = "id = " + req.params.id;
  console.log("update condition"+ condition);

  burger.update({isDevoured: req.body.isDevoured}, condition, function(result){
    // console.log(result);
    res.redirect("/");
  });
});

router.post("/burgers/create", function(req, res){
  burger.create(req.body.burger_name, function(result){
    res.redirect("/");
  });
});

module.exports = router;  