var fs = require('fs');
fs.readFile('index.html', 'utf8', function(err, contents) {
    console.log(contents);
});
console.log('after calling readFile');