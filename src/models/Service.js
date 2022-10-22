const mongoose = require('mongoose');

const Service = mongoose.Schema({ 
    // I am taken things becoz I have to dynamically link this with Mongo Db
    icon: String,
    title: String,
    description: String,
    amount: String,
    buy: String
    // linkText: String,
    // link: String
})

module.exports = mongoose.model("services", Service)