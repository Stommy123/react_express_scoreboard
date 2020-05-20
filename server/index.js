//Require express as a dependency
const express = require('express');
const axios = require('axios');

//Create a new express app by calling the express function and store it in a constant named app
const app = express();

app.get('/home', (req, res) => {
  console.log('hello world');
});

//Create new request handler that when receiving a
//GET request to the /people endpoint
//will send back a JSON collection of people
app.get('/people', async (_, res) => {
  const { data } = await axios.get('https://randomuser.me/api/?results=5&nat=us');
  const people = data.results.map(({ name, login, dob }) => ({
    name: `${name.first} ${name.last}`,
    id: login.uuid,
    age: dob.age,
    score: Math.ceil(Math.random() * 10),
  }));
  return res.send({ people });
});

//Assign dynamic port for server to listen on
const PORT = process.env.PORT || 5000;

//Tell server to listen for incoming requests on port PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
