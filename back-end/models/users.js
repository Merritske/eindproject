const mongoose = require('mongoose')

//create schema
var userSchema = new mongoose.Schema({
username:{
    type : String,
    required : true
},
password : {
    type: String,
    required: true
},
birthday : {
    type:  Date,
    required: false
},
woonplaats: {
    type : String,
    required: false
}
})

module. exports = mongoose.model( "user", userSchema)