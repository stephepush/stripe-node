const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Handlebars = require("handlebars");

const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(morgan('short'));


app.set('view engine', 'hbs' );

app.use(require('../routes'));
dotenv.config();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

app.listen(PORT, ()=>{
    console.log(`Server is up and listening on port ${PORT}...`)
});