const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

//express() generates new express app
const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);