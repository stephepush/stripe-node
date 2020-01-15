const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

(async () => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'usd',
        payment_method_types: ['card'],
    })
})()