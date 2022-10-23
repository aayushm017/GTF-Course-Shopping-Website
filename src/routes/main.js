const express = require('express');
const { setMaxListeners } = require('../models/Detail');
const routes = express.Router(); //we have made the Router object

const Detail = require('../models/Detail'); //for parent directory of the current directory .. 2 dots.. for current directory . single dot is required
const Service = require('../models/Service');
const Contact = require('../models/Contact');
const response = require('express');

//Configuring routes 
routes.get("/", async (req, res) => {
    const details = await Detail.findOne({ "_id": "6353ae8921b0c824293c426a" });
    const services = await Service.find();

    res.render("index", {
        details: details,  //which means the object above coming from the database is passed to index.hbs file
        services: services
    });
})

routes.get("/gallery", async (req, res) => {  //making routes for new page 
    const details = await Detail.findOne({ "_id": "6353ae8921b0c824293c426a" });
    res.render("gallery", {
        details: details,
    });
});

routes.post("/process-contact-form", async(req, res) => {
    console.log("This form is Submitted");
    // console.log(req.body);
    //save the data to db
    try {
        const data = await Contact.create(req.body);
        // console.log(data);
        res.redirect("/");

    } catch (e) {
        console.log(e);
        res.redirect("/");
    }
})

module.exports = routes;