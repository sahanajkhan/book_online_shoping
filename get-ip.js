import os from 'os';

const nets = os.networkInterfaces();
let ipAddress = 'Not found';

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
    if (net.family === 'IPv4' && !net.internal) {
      ipAddress = net.address;
      break;
    }
  }
}

console.log('\n=============================================');
console.log('YOUR COMPUTER IP ADDRESS IS: ' + ipAddress);
console.log('=============================================\n');
console.log('1. Copy this IP address.');
console.log('2. Open the .env file inside your book_store folder.');
console.log('3. Put the IP address there like this:');
console.log('   VITE_API_URL=http://' + ipAddress + ':5000/api');
console.log('\n');
