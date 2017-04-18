import fs = require('fs')

function readFileAsync(filename: string): Promise<any>{
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, result) => {
      if(err) reject(err);
      else resolve(result);
    });
  });
}

function loadJSONAsync(filename: string): Promise<any>{
  return readFileAsync(filename)
  .then(function(res){
    return JSON.parse(res);
  });
}

loadJSONAsync('good.json')
.then(function(val) { console.log(val); })
.catch(function(err) {
  console.log('good.json err ' + err.message);
});

loadJSONAsync('absent.json')
.then(function(val) { console.log(val); })
.catch(function(err) {
  console.log('absent.json err ' + err.message);
});

loadJSONAsync('invalid.json')
.then(function(val) { console.log(val); })
.catch(function(err) {
  console.log('invalid.json err ' + err.message);
});
