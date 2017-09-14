var fs = require('fs');
var timestamp = new Date().toString();
var contents;

fs.writeFileSync('date.txt', timestamp);
contents = fs.readFileSync('date.txt');

console.log('Checking Contents');
console.log(contents.toString());
console.assert(contents == timestamp);
console.log('Script Finished');