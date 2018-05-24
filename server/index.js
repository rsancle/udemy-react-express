const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

//express() generates new express app
const app = express();


//Set what strategy we will use
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(accessToken);
        }
    )
);

//route handler
/*app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});*/

app.get(
    '/auth/google',
    passport.authenticate(
        'google',
        {
            scope: ['profile', 'email']
        }
    )
);

app.get('/auth/googlecallback', passport.authenticate('google'));


const PORT = process.env.PORT || 5000;
app.listen(PORT);