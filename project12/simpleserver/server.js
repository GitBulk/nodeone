const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const mimeTypes = {
    'html': 'text/html',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpg',
    'png': 'image/png',
    'js': 'text/javascript',
    'css': 'text/css'
};

http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname;
    var fileName = path.join(process.cwd(), unescape(uri));
    // console.log('Loading ' + uri);
    var stats;

    try {
        stats = fs.lstatSync(fileName);
    } catch (e) {
        response.writeHead(404, {'Content-type': 'text/plain'});
        response.write('404 Not Found');
        response.end();
        return;
    }

    if (stats.isFile()) {
        console.log('extname: ' + path.extname(fileName));
        var mimeType = mimeTypes[path.extname(fileName).split('.').reverse()[0]];
        response.writeHead(200, {'Content-type': mimeType});

        var fileStream = fs.createReadStream(fileName);
        fileStream.pipe(response);
    } else if (stats.isDirectory()) {
        response.writeHead(302, {'Location': 'index.html'});
        response.end();
    } else {
        response.writeHead(500, {'Content-type': 'text/plain'});
        response.write('500 Internal Error');
        response.end();
    }
}).listen(3333);