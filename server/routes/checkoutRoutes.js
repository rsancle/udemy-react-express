const config = require('../config/app');
const stripe = require('stripe')(config.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '5$ for 5 credits',
            source: req.body.id
        });

        //it is saved in the passport session
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    });
}