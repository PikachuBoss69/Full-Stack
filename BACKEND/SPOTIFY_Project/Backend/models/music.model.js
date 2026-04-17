const mongoose = require('mongoose');

const musicSchema = mongoose.Schema({
    audio:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    album: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: "album",
        default: null  
    }

})

const musicModel = mongoose.model("music",musicSchema);

module.exports = musicModel