const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the content type for the response
  res.setHeader('Content-Type', 'text/html');

  // Determine the file path based on the URL
  let filePath = './';

  if (req.url === '/') {
    filePath += 'home.html';
  } else if (req.url === '/about') {
    filePath += 'about.html';
  } else if (req.url === '/contact') {
    filePath += 'contact.html';
  }

  // Check if the file exists
  fs.access(filePath, (err) => {
    if (!err) {
      // Read the file and send it as a response
      fs.readFile(filePath, (err, data) => {
        if (!err) {
          res.statusCode = 200;
          res.end(data);
        } else {
          res.statusCode = 500;
          res.end('Internal Server Error');
        }
      });
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  });
});

const port = 5000;
server.listen(port, () => {
  console.log(`The NodeJS server on port ${port} is now running...`);
});
