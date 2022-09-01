const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    fileName:{
        type: String, 
        unique: true,
        required: true
    }

});

const File = mongoose.model("File", fileSchema);
module.exports = File;