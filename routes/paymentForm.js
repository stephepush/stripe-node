const express = require('express');
const router = express.Router();
const key_vars = require('../models/key_vars.js');


router.get('/', (req, res)=>{
    res.render('pages/checkout.hbs', {title: "Checkout Element", client_secret: key_vars.returns_public_key});
    console.log(key_vars.returns_public_key);
});

router.post('/validation', (req, res)=>{
    //name
    //email
    //address1
    //address2
    //city
    //state
    //country 
    //cardholder
    //cardtoken
    //secret key try to initiate script and connect with stripe
    //validate
    //try/catch to start charge with card token

    const customer = ({
        name: req.body.name,
        email: req.body.email,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        cardholder: req.body.cardholder,
        cardtoken: req.body.cardtoken,
        client_secret: key_vars.returns_secret_key,
        
    })

});

module.exports = router;