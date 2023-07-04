import { DecodePayload } from "./decoder.js";

const hexPayloads = [
    'cbb409c401990109857fff',
    'cbb2094e01a70109927fff',
    'cbe00b1c01a3010a2e7fff'
  ];
  hexPayloads.forEach((hexPayload, index) => {


    const bytes = hexPayload.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) || [];
    const decodedData = DecodePayload(bytes);
  
  
    console.log(`Decoded data for payload ${index + 1}:`);
    console.log(decodedData);
    console.log('----------------------------');
  });

