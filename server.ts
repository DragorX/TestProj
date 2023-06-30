// import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';
import { decodePayload } from './decoder';

import express = require('express');
import * as bodyParser from 'body-parser';


// Rest of the code...

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());


// Routes
app.all('/decode', (req, res) => {
    if (req.method === 'POST') {
      // Get the HEX payload from the request body
      const hexPayload = req.body.payload;
  
      // Call the decoder function to decode the payload
      const decodedData = decodePayload(hexPayload);
  
      // Send the decoded data as a JSON response
      res.json(decodedData);
    } else {
      // Handle GET request for /decode
      res.send('This route only supports POST requests');
    }
  });

// Routes
// app.post('/decode', (req, res) => {
  // Get the HEX payload from the request body
//   const hexPayload = req.body.payload;

  // Call the decoder function to decode the payload
//   const decodedData = decodePayload(hexPayload);

  // Send the decoded data as a JSON response
//   res.json(decodedData);
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
