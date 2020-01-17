const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const hbs = require("hbs");

const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(morgan('short'));

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials/');


app.use(require('./routes'));
dotenv.config();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

//console.log(stripePublicKey + " also: " + stripeSecretKey)

app.listen(PORT, ()=>{
    console.log(`Server is up and listening on port ${PORT}...`)
});