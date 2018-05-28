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

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/log_out', (req, res) => {
        req.logout();
    });
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}
