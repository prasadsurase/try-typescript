"use strict";
exports.__esModule = true;
var fs = require("fs");
function loadJSONSync(filename, callback) {
    fs.readFile(filename, 'utf8', function (err, data) {
        console.log(err);
        if (err)
            callback(err, null);
        else
            callback(null, JSON.parse(data));
    });
}
loadJSONSync('good.json', function (err, data) {
    console.log('good--------------------');
    if (err)
        console.log('Error:' + err);
    else
        console.log(data);
});
loadJSONSync('absent.json', function (err, data) {
    console.log('absent--------------------');
    if (err)
        console.log('Error:' + err.message);
    else
        console.log(data);
});
loadJSONSync('invalid.json', function (err, data) {
    console.log('invalid--------------------');
    if (err)
        console.log('Error:' + err.message);
    else
        console.log(data);
});
