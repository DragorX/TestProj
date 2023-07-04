export function DecodePayload(bytes: number[]): any {
  const Ext = bytes[6] & 0x0F;
  const poll_message_status = (bytes[6] >> 7) & 0x01;
  const decode: any = {};

  switch (poll_message_status) {
    case 0:
      if (Ext === 0x09) {
        decode.TempC_DS = parseFloat(((bytes[0] << 24 >> 16 | bytes[1]) / 100).toFixed(2));
        decode.Bat_status = bytes[4] >> 6;
      } else {
        decode.BatV = ((bytes[0] << 8 | bytes[1]) & 0x3FFF) / 1000;
        decode.Bat_status = bytes[0] >> 6;
      }

      if (Ext !== 0x0F) {
        decode.TempC_SHT = parseFloat(((bytes[2] << 24 >> 16 | bytes[3]) / 100).toFixed(2));
        decode.Hum_SHT = parseFloat((((bytes[4] << 8 | bytes[5]) & 0xFFF) / 10).toFixed(1));
      }

      if (Ext === 0x00) {
        decode.Ext_sensor = "No external sensor";
      } else if (Ext === 0x01) {
        decode.Ext_sensor = "Temperature Sensor";
        decode.TempC_DS = parseFloat(((bytes[7] << 24 >> 16 | bytes[8]) / 100).toFixed(2));
      } else if (Ext === 0x02) {
        decode.Ext_sensor = "Temperature Sensor";
        decode.TempC_TMP117 = parseFloat(((bytes[7] << 24 >> 16 | bytes[8]) / 100).toFixed(2));
      } else if (Ext === 0x04) {
        decode.Work_mode = "Interrupt Sensor send";
        decode.Exti_pin_level = bytes[7] ? "High" : "Low";
        decode.Exti_status = bytes[8] ? "True" : "False";
      } else if (Ext === 0x05) {
        decode.Work_mode = "Illumination Sensor";
        decode.ILL_lx = bytes[7] << 8 | bytes[8];
      } else if (Ext === 0x06) {
        decode.Work_mode = "ADC Sensor";
        decode.ADC_V = (bytes[7] << 8 | bytes[8]) / 1000;
      } else if (Ext === 0x07) {
        decode.Work_mode = "Interrupt Sensor count";
        decode.Exit_count = bytes[7] << 8 | bytes[8];
      } else if (Ext === 0x08) {
        decode.Work_mode = "Interrupt Sensor count";
        decode.Exit_count = bytes[7] << 24 | bytes[8] << 16 | bytes[9] << 8 | bytes[10];
      } else if (Ext === 0x09) {
        decode.Work_mode = "DS18B20 & timestamp";
        decode.Systimestamp = (bytes[7] << 24 | bytes[8] << 16 | bytes[9] << 8 | bytes[10]);
      } else if (Ext === 0x0F) {
        decode.Work_mode = "DS18B20ID";
        decode.ID = `${str_pad(bytes[2])}${str_pad(bytes[3])}${str_pad(bytes[4])}${str_pad(bytes[5])}`;
      }
      break;

    case 1:
      decode.poll_message_status = "Polling message status";
      break;

    default:
      decode.unknown_status = "Unknown status";
      break;
  }

  return decode;
}

function str_pad(n: number): string {
  return n.toString().padStart(2, "0");
}
