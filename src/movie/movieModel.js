const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    tmdbId:{
        type: String, 
        unique: true,
        required: true
    },
    title:{
        type: String,
        unique: true,
        required: true,
    },
    poster: {
        type: String,
    },

});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;