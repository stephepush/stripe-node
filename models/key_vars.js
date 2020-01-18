const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    returns_private_key: function(){
        return process.env.STRIPE_SECRET_KEY;
    },

    returns_public_key: function(){
        return process.env.STRIPE_PUBLIC_KEY;
    }
};