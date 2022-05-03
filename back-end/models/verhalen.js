const mongoose = require("mongoose");

var Verhalen = new mongoose.Schema({
    titel:{
        type: String,
        required: true
    },
    verhaal: {
        type: String,
        required : true
    },
    plaats:{
        type : String,
        required: false
    }
})

model.exports("verhaal", Verhalen)