"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodePayload = exports.hexToBytes = void 0;
function hexToBytes(hex) {
    var bytes = [];
    for (var i = 0; i < hex.length; i += 2) {
        bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    return bytes;
}
exports.hexToBytes = hexToBytes;
function extractTemperature(bytes) {
    var temperatureBytes = (bytes[1] << 8) | bytes[2];
    var temperatureValue = temperatureBytes & 0x7FFF;
    if ((temperatureBytes & 0x8000) > 0) {
        temperatureValue = -temperatureValue;
    }
    return temperatureValue / 100;
}
function extractHumidity(bytes) {
    var humidityByte = bytes[3];
    return humidityByte !== undefined ? humidityByte * 0.5 : 0;
}
function extractBatteryVoltage(bytes) {
    var voltageByte1 = bytes[4];
    var voltageByte2 = bytes[5];
    if (voltageByte1 !== undefined && voltageByte2 !== undefined) {
        return (voltageByte1 << 8 | voltageByte2) * 0.01;
    }
    return 0;
}
function extractExternalTemperature(bytes) {
    var externalSensorType = bytes[8];
    if (externalSensorType === 0x01 || externalSensorType === 0x09) {
        var temperatureBytes = (bytes[9] << 8) | bytes[10];
        var temperatureValue = temperatureBytes & 0x7FFF;
        if ((temperatureBytes & 0x8000) > 0) {
            temperatureValue = -temperatureValue;
        }
        return temperatureValue / 100;
    }
    return 0;
}
function decodePayload(hexPayload) {
    var payloadBytes = hexToBytes(hexPayload);
    var temperature = extractTemperature(payloadBytes);
    var humidity = extractHumidity(payloadBytes);
    var battery = extractBatteryVoltage(payloadBytes);
    var temperatureExt = extractExternalTemperature(payloadBytes);
    return {
        temperature: temperature,
        humidity: humidity,
        battery: battery,
        temperatureExt: temperatureExt
    };
}
exports.decodePayload = decodePayload;
// export function decodeDraginoLHT65Payload(hexPayload: string): any {
//   const payloadBytes = hexToBytes(hexPayload);
//   const temperature = extractTemperature(payloadBytes);
//   const humidity = extractHumidity(payloadBytes);
//   const batteryVoltage = extractBatteryVoltage(payloadBytes);
//   const externalTemperature = extractExternalTemperature(payloadBytes);
//   return {
//     temperature,
//     humidity,
//     batteryVoltage,
//     externalTemperature
//   };
// }
