// http://testerstories.com/2016/03/webdriver-in-javascript-with-promises/

var fs = require('fs');
var timestamp = new Date().toString();

fs.writeFile('date.txt', timestamp, function (err) {
    if (err) throw err;

    fs.readFile('date.txt', function (err, contents) {
        if (err) throw err;
        console.log('Checking Contents');
        console.log(contents.toString());
        console.assert(contents == timestamp);
    });
});

console.log('Script Finished');