const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

//Set what strategy we will use
module.exports = () =>
{
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
}