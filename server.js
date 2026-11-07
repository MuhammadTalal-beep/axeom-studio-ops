const http = require('http');
const fs = require('fs');
const path = require('path');

const dataHandler = require('./api/data');
const actionHandler = require('./api/action');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  const url = req.url.split('?')[0];

  // API Routes
  if (url === '/api/data') {
    return dataHandler(req, res);
  }
  if (url === '/api/action') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      req.body = body;
      return actionHandler(req, res);
    });
    return;
  }

  // Static File Serving
  let filePath = path.join(__dirname, url === '/' ? 'index.html' : url);
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`AXEOM STUDIO OPS CORE — FULL STACK SERVER`);
  console.log(`Ready at: http://localhost:${PORT}`);
  console.log(`API Endpoints: /api/data & /api/action`);
  console.log(`======================================================\n`);
});
