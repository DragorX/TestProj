const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Middleware
app.use(bodyParser.json());
// Routes
app.post('/decode', (req, res) => {
    // Get the HEX payload from the request body
    const hexPayload = req.body.payload;
    // Call the decoder function to decode the payload
    const decodedData = decodePayload(hexPayload);
    // Send the decoded data as a JSON response
    res.json(decodedData);
});
// Decoder function
function decodePayload(hexPayload) {
    // Implement your decoding logic here and return the decoded data as an object
    // Example implementation:
    const decodedData = {
        temperature: 25,
        humidity: 40.9,
        battery: 2996,
        temperatureExt: 24.37
    };
    return decodedData;
}
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map