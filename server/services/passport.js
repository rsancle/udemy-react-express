const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../config/app');

const User = mongoose.model('users');


//Piece of information that will be sent to set the login cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//Get the information of the cookie
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
})

//Set what strategy we will use
passport.use(
    new GoogleStrategy(
        {
            clientID: config.googleClientID,
            clientSecret: config.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            //Find if the user exist with GoogleID, if not, it creates a new one
            let user = await User.findOne({ googleId: profile.id});
            if (!user){
                user = await new User({ googleId: profile.id }).save()
            }
            return done(null, user);
        }
        /* old code
        (accessToken, refreshToken, profile, done) => {
            //Find if the user exist with GoogleID, if not, it creates a new one
            User.findOne({ googleId: profile.id})
                .then((existingUser) => {
                    if (existingUser){
                        done(null, existingUser);
                    } else {
                        new User({ googleId: profile.id })
                            .save()
                            .then(user => done(null, user));
                    }
                }
            );
        }*/
    )
);