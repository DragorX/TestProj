"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';
var decoder_1 = require("./decoder");
var express = require("express");
var bodyParser = require("body-parser");
// Rest of the code...
var app = express();
var port = 3000;
// Middleware
app.use(bodyParser.json());
// Routes
app.all('/decode', function (req, res) {
    if (req.method === 'POST') {
        // Get the HEX payload from the request body
        var hexPayload = req.body.payload;
        // Call the decoder function to decode the payload
        var decodedData = (0, decoder_1.decodePayload)(hexPayload);
        // Send the decoded data as a JSON response
        res.json(decodedData);
    }
    else {
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
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
