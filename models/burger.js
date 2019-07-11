var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        })
    },
    update: function(id, cb){
        // console.log('burger file');
        orm.updateOne("burgers", id, cb)
    },
    create: function(name, cb){
        orm.insertOne("burgers", name, cb)
    }
};

module.exports = burger;