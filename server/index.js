//Require express as a dependency
const express = require("express");
const axios = require("axios");

//Create a new express app by calling the express function and store it in a constant named app
const app = express();

app.get("/home", (req, res) => {
  console.log("hello world");
});

//Create new request handler that when receiving a
//GET request to the /characters endpoint
//will send back a JSON collection of characters
app.get("/characters", async (req, res) => {
  const { data } = await axios.get("https://swapi.co/api/people");
  return res.send(data);
});

//Assign dynamic port for server to listen on
const PORT = process.env.PORT || 5000;

//Tell server to listen for incoming requests on port PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
