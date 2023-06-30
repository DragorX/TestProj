"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeDraginoLHT65Payload = exports.hexToBytes = void 0;
function hexToBytes(hex) {
    const bytes = [];
    for (let i = 0; i < hex.length; i += 2) {
        bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    return bytes;
}
exports.hexToBytes = hexToBytes;
function extractTemperature(bytes) {
    const temperatureBytes = (bytes[1] << 8) | bytes[2];
    let temperatureValue = temperatureBytes & 0x7FFF;
    if ((temperatureBytes & 0x8000) > 0) {
        temperatureValue = -temperatureValue;
    }
    return temperatureValue / 100;
}
function extractHumidity(bytes) {
    const humidityByte = bytes[3];
    return humidityByte !== undefined ? humidityByte * 0.5 : 0;
}
function extractBatteryVoltage(bytes) {
    const voltageByte1 = bytes[4];
    const voltageByte2 = bytes[5];
    if (voltageByte1 !== undefined && voltageByte2 !== undefined) {
        return (voltageByte1 << 8 | voltageByte2) * 0.01;
    }
    return 0;
}
function extractExternalTemperature(bytes) {
    const externalSensorType = bytes[8];
    if (externalSensorType === 0x01 || externalSensorType === 0x09) {
        const temperatureBytes = (bytes[9] << 8) | bytes[10];
        let temperatureValue = temperatureBytes & 0x7FFF;
        if ((temperatureBytes & 0x8000) > 0) {
            temperatureValue = -temperatureValue;
        }
        return temperatureValue / 100;
    }
    return 0;
}
function decodeDraginoLHT65Payload(hexPayload) {
    const payloadBytes = hexToBytes(hexPayload);
    const temperature = extractTemperature(payloadBytes);
    const humidity = extractHumidity(payloadBytes);
    const batteryVoltage = extractBatteryVoltage(payloadBytes);
    const externalTemperature = extractExternalTemperature(payloadBytes);
    return {
        temperature,
        humidity,
        batteryVoltage,
        externalTemperature
    };
}
exports.decodeDraginoLHT65Payload = decodeDraginoLHT65Payload;
//# sourceMappingURL=decoder.js.map