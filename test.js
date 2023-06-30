"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var decoder_1 = require("./decoder");
// Example HEX payloads for tests and comparison
var hexPayloads = [
    'cbb409c401990109857fff',
    'cbb2094e01a70109927fff',
    'cbe00b1c01a3010a2e7fff'
];
// Iterate over the HEX payloads and decode them
hexPayloads.forEach(function (hexPayload, index) {
    // Decode the HEX payload
    var decodedData = (0, decoder_1.decodePayload)(hexPayload);
    // Log the decoded data for verification
    console.log("Decoded data for payload ".concat(index + 1, ":"));
    console.log(decodedData);
    console.log('----------------------------');
});
