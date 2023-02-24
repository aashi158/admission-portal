const mongoose = require('mongoose')

// schema or fields
const UserSchema = new mongoose.Schema({
     name: {
          type: String,
          Required: true,
     },
     email: {
          type: String,
          Required: true,
          Unique: true
     },
     password: {
          type: String,
          Required: true,
     },
     role: {
          type: String,
          default: 'student'
     }

}, { timestamps: true })
// create model

const UserModel = mongoose.model('user', UserSchema); //user is name of collection

module.exports = UserModel