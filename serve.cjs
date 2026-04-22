const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer((req, res) => {
  let fp = path.join(__dirname, req.url.split('?')[0]);
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); res.end('not found'); return; }
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(data);
  });
}).listen(5182, () => console.log('Server on :5182'));
