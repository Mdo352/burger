var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        })
    },
    update: function(id, cb){
        console.log('burger file');
        orm.updateOne('burgers', id,cb)
    }
};

module.exports = burger;