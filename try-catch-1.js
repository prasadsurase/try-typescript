"use strict";
exports.__esModule = true;
var fs = require("fs");
function loadJSONSync(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf8'));
}
console.log(loadJSONSync('good.json'));
try {
    console.log(loadJSONSync('absent.json'));
}
catch (err) {
    console.log('absent.json err ', err.message);
}
try {
    console.log(loadJSONSync('invalid.json'));
}
catch (err) {
    console.log('invalid.json err ', err.message);
}
