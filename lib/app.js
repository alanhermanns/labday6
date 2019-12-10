const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const createHTML = data => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${data}</title>
</head>
<body>
   <h1>${data}</h1> 
</body>
</html>`;

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    console.log('req in app', request);
    if(request.method === 'GET' && request.path === '/'){
      socket.end(createResponse({
        body : createHTML('hi'),
        status: '200 OK',
        contentType: 'text/html'
      }));
    }
    if(request.method === 'GET' && request.path === '/green'){
      socket.end(createResponse({
        body : createHTML('green'),
        status: '200 OK',
        contentType: 'text/html'
      }));
    }
    if(request.method === 'GET' && request.path === '/blue'){
      socket.end(createResponse({
        body : createHTML('blue'),
        status: '200 OK',
        contentType: 'text/html'
      }));
    }
    if(request.method === 'GET' && request.path === '/red'){
      socket.end(createResponse({
        body : createHTML('red'),
        status: '200 OK',
        contentType: 'text/html'
      }));
    }
    if(request.method === 'POST' && request.path === '/ha'){
      socket.end(createResponse({
        body : createHTML(request.body),
        status: '200 OK',
        contentType: 'text/html'
      }));
    }
    // else { socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));  }
  });
});

module.exports = { app, createHTML };
