const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    returns_private_key: process.env.STRIPE_SECRET_KEY,
    returns_public_key: process.env.STRIPE_PUBLIC_KEY
    
};