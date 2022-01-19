const express = require("express");
const app = express();

const port = 8000;

//app goes before require 

app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/config/mongoose.config");

require("./server/routes/jokes.routes")(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));