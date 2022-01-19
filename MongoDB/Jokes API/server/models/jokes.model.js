const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({

    setup: String,
    punchline: String
})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;