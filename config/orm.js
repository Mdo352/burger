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
    // insertOne: function(table, condition, cb) {
    //     var queryString = "SELECT * FROM " + table + " where condition;";

    //     // connection.query = 
    // },
    updateOne: function(tableInput, condition, cb) {
        console.log('orm file');
        var queryString = "UPDATE burgers SET isDevoured=true WHERE id=" + condition + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            
            cb(result);
        });
    }
};

module.exports = orm;