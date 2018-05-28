const mongoose = require('mongoose');
const { Schema, model } = mongoose; //const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    name: String
});

model('users', userSchema);