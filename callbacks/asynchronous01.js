// http://testerstories.com/2016/03/webdriver-in-javascript-with-promises/

// this would error
var fs = require('fs');
var timestamp = new Date().toString();
var contents;

fs.writeFile('date.txt', timestamp);

fs.readFile('date.txt', function (err, data) {
    if (err) throw err;
    contents = data;
});

console.log('Comparing Contents');
console.assert(timestamp == contents);