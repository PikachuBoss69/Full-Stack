const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    image : String,
    caption : String,
})

const noteModel = mongoose.model('post',notesSchema);

module.exports = noteModel