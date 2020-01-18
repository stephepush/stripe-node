const express = require('express');
const router = express.Router();
const key_vars = require('../models/key_vars.js');

router.get('/', (req, res)=>{
    res.render('pages/checkout.hbs', {title: "Checkout Element"})
    console.log(key_vars.returns_public_key);
});

module.exports = router;