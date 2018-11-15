const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
app.use('/react', express.static('static'));

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.listen(port, function() {
    console.log('Server on');
});