const express = require('express');
require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
require('./models/User');

mongoose.connect(keys.mongoURI);

//express() generates new express app
const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);