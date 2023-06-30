import { decodePayload } from './decoder';

// Example HEX payloads for tests and comparison
const hexPayloads = [
  'cbb409c401990109857fff',
  'cbb2094e01a70109927fff',
  'cbe00b1c01a3010a2e7fff'
];

// Iterate over the HEX payloads and decode them
hexPayloads.forEach((hexPayload, index) => {
  // Decode the HEX payload
  const decodedData = decodePayload(hexPayload);

  // Log the decoded data for verification
  console.log(`Decoded data for payload ${index + 1}:`);
  console.log(decodedData);
  console.log('----------------------------');
});
