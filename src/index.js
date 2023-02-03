require('dotenv').config();
const express = require("express");
const hbs = require("hbs"); //for configuration we require to import hbs
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const routes = require("./routes/main"); //using routes which is being exported
const Detail = require("./models/Detail");
const Service = require("./models/Service");
let port = process.env.PORT || 5556;

const DB = process.env.DATABASE;

//static/css/style.css
app.use("/static", express.static("public")); //if we want to fetch any file from public folder then we were using:-  localhost:5556/static/css/style.css
app.use(bodyParser.urlencoded({
  extended: true  //url encoded with data will parse and we will get the data as javascript Object (contact-form)
}))
app.use("", routes); //configured the route

//(template engine) hbs
app.set("view engine", "hbs");
app.set("views", "views");   //views files store in views folder
hbs.registerPartials("views/partials");  //connecting/register partials.. Using same navbar in different pages.

mongoose.connect(DB).then(()=>{
  console.log("DB Connected");

// Service.create([
//   {
//     icon: 'fab fa-accusoft',
//     title: 'Trading in the Zone - Technical Analysis',
//     description: 'This course is designed for those who wants to become full time trader and earn money by regular trading in stock market. Course include pure technical analysis with sector correlation, position size, risk management etc.',
//     linkText: 'https://www.gettogetherfinance.com/',
//     link: 'Check'
//   },
//   {
//     icon: 'fab fa-money-bill-trend-up',
//     title: 'Combo(Trading in the Zone + GTF Options)',
//     description: 'This stock trading course is a combination of both trading in the zone and GTF options course',
//     linkText: 'https://www.gettogetherfinance.com/',
//     link: 'Check'
//   },
//   {
//     icon: 'fab fa-solid fa-bitcoin-sign',
//     title: 'GTF Options',
//     description: 'This course is designed for those who want to trade options professionally, in this course you will get to know how options premium calculated with the help of Greeks.',
//     linkText: 'https://www.gettogetherfinance.com/',
//     link: 'Check'
//   },
// ])

// Detail.create({
//   brandName: "Get Together Finance", 
//   brandIconUrl: "https://www.gettogetherfinance.com/images/frontend/web-logo.png",
//   links: [
//     {
//       label: "Home",
//       url: "/"
//     },
//     {
//       label: "Services",
//       url: "/services"
//     },
//     {
//       label: "Gallery",
//       url: "/gallery"
//     },
//     {
//       label: "About",
//       url: "/about"
//     },
//     {
//       label: "Contact Us",
//       url: "/contact-us"
//     },
//   ]
// })
}).catch((err)=> console.log(err));


app.listen(port, () => {
  console.log("Server Started");
});
