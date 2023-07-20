const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const db = require("../models");
const { Country, States, User } = db;

exports.intialize = async (req, res) => {
    try {
        const amount = req.body.amount * 100 // convert to cents.
        const currency = process.env.SYSTEM_CURR
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });

        res.send({ 
            success: true,
            clientSecret: paymentIntent.client_secret
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: error.message 
        });
    }
}