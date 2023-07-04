"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var decoder_js_1 = require("./decoder.js");
var hexPayloads = [
    'cbb409c401990109857fff',
    'cbb2094e01a70109927fff',
    'cbe00b1c01a3010a2e7fff'
];
hexPayloads.forEach(function (hexPayload, index) {
    var _a;
    var bytes = ((_a = hexPayload.match(/.{1,2}/g)) === null || _a === void 0 ? void 0 : _a.map(function (byte) { return parseInt(byte, 16); })) || [];
    var decodedData = (0, decoder_js_1.DecodePayload)(bytes);
    console.log("Decoded data for payload ".concat(index + 1, ":"));
    console.log(decodedData);
    console.log('----------------------------');
});
