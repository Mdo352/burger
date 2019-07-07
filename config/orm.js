// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    all: function( table, cb) {
        // var queryString = "SELECT * FROM" + table + ";";
        var queryString = "SELECT * FROM burgers;";

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            
            cb(result);
        });
      
    },
    insertOne: function(table, val, cb) {
        var queryString = "INSERT INTO BURGERS (burger_name, isDevoured) VALUES('"+val+"', false);";
        // var queryString = "INSERT INTO BURGERS (burger_name, isDevoured) VALUES('mike', false);";
        connection.query(queryString, function(err,result){
            if (err) throw err;
            cb(result);
        }) 

    },
    updateOne: function(tableInput, condition, cb) {
        var queryString = "UPDATE burgers SET isDevoured=true WHERE id=" + condition + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            
            cb(result);
        });
    }
};

module.exports = orm;