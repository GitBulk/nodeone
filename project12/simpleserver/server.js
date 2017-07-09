const http = require('http');
const hostName = '127.0.0.1';
const port = 3333;
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text.plain'});
    response.end('Hello world');
}).listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}`);
});