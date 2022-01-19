const JokeController = require("../controllers/jokes.controller");
console.log("Routes File");
module.exports = app => {
    console.log("Routes");
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
    app.post("/api/jokes/new", JokeController.createJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
};