const Joke = require("../models/jokes.model");

//Read 
//Read All
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes:allJokes}))
        .catch(err => res.json({message: "Something went wrong", error:err}));
};

//Read One
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(singleJoke => res.json({joke:singleJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

//Create
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

