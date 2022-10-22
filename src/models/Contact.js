const mongoose = require('mongoose');

const Contact = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    app: String,
    referenceNo: Number,
    query: String
})

module.exports = mongoose.model("contact", Contact);