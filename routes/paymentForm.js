const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('pages/checkout.hbs')
});

module.exports = router;