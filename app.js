const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(morgan('short'));

//app.set('view engine', )

app.use(require('./routes'));


app.listen(PORT, ()=>{
    console.log(`Server is up and listening on port ${PORT}...`)
});