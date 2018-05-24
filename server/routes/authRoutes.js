const passport = require('passport');

//route handler sample
/*app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});*/

module.exports = app => {
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
}
