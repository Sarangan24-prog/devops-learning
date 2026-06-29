const express = require('express');//import express libeary
const app = express();//receive express function and store it in app variable
app.get('/', (req, res) => {//define a route for the root URL
  res.send('Hello DevOps!');//someone visits the root URL, send a response with the text "Hello DevOps!"
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});//application receive incomming requests on port 3000 and log a message to the console when the server is running    