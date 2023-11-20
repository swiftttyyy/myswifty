const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
    {
       fullname: {
        type: String
       },
       username: {
        type: String
       },
       email:{
        type: String
       },
       password:{
        type: String
       },
       balance:{
        type: Number,
        default:  0
       }

    }
)

const User = mongoose.model('User', UserSchema)

module.exports = User