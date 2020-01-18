const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.render('pages/index', {title: "Welcome!"})
})


router.use('/paymentForm', require('./paymentForm.js'));

module.exports = router;