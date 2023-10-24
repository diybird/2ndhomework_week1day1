const http = require('http');

const server = http.createServer((req, res) => {
  // Set the content type for the response
  res.setHeader('Content-Type', 'text/plain');

  // Check the URL and respond accordingly
  if (req.url === '/') {
    res.end('This is the home page');
  } else if (req.url === '/about') {
    res.end('This is the about page');
  } else if (req.url === '/contact') {
    res.end('This is the contact page');
  } else {
    res.statusCode = 404;
    res.end('Invalid Request!');
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`The NodeJS server on port ${port} is now running...`);
});
