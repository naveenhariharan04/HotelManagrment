require('dotenv').config();
const express = require('express');
const app = express();

console.log("Starting the server...");

app.get('/', (req, res) => {
  console.log("Received a request to the root endpoint");
  res.send('Hello, World!');
});

const port = process.env.PORT || 3000;  // Use the port defined in the .env file or default to 3000
console.log(`Port being used: ${port}`);

app.listen(port, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
    return;
  }
  console.log(`Server is running on port ${port}`);
});
