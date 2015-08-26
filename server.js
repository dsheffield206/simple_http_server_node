var http = require('http');
var fs = require('fs');

// 404 response
function send404Response(response){
  response.writeHead(404, {'Context-Type': 'text/plain'});
  response.write('Error 404: Page not found!');
  response.end();
}

// Handle a user request
function onRequest(request, response){
  console.log(request.url);
  if(request.method == 'GET' && request.url == '/' || request.url == '/index.html') {
    response.writeHead(200, {'Context-Type': 'text/plain'});
    fs.createReadStream('./index.html').pipe(response);
  } else {
    send404Response(response);
  }
}

http.createServer(onRequest).listen(5000);
console.log('Server is now running....');
