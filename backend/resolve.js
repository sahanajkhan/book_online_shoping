const https = require('https');

https.get('https://dns.google/resolve?name=_mongodb._tcp.bookshopping.8ikauis.mongodb.net&type=SRV', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
