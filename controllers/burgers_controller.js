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
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect("/");
  })
})

module.exports = router;  