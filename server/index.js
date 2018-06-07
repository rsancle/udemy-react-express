const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const config = require('./config/app');

require('./models/User');
require('./models/Survey');
require('./services/passport');


mongoose.connect(config.mongoURI);

//express() generates new express app
const app = express();

app.use(bodyParser.json()); //Middleware used to get the POST data parsed as a json (req.body)

//TODO change cookieSession for express-session
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //days, hours, minutes, seconds, milisec
    keys: [config.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());
//TODO use express Router
require('./routes/authRoutes') (app);
require('./routes/checkoutRoutes') (app);
require('./routes/surveyRoutes') (app);


//if it is in production
if(process.env.NODE_ENV == 'production')
{
    //use static content from client/build path (js and css)
    app.use(express.static('client/build'));

    //if the route doesn't exists, redirect to the client index
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);