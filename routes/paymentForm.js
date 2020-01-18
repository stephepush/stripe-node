const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('pages/checkout.hbs', {title: "Checkout Element", client_secret: process.env.STRIPE_PUBLIC_KEY})
    console.log(client_secret);
});

module.exports = router;