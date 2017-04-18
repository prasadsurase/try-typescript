import fs = require('fs');

function loadJSONSync(filename: string, callback: (err: Error, data: any) => void){
  fs.readFile(filename, 'utf-8', function(err, data){
    if(err) return callback(err, null);
    try {
      var parsedData = JSON.parse(data);
    }
    catch(err) {
      return callback(err, null);
    }
    return callback(null, parsedData);
  });
}

loadJSONSync('good.json', function(err, data){
  console.log('good--------------------');
  if(err) console.log('Error:' + err);
  else console.log(data);
});

loadJSONSync('absent.json', function(err, data){
  console.log('absent--------------------');
  if(err) console.log('Error:' + err.message);
  else console.log(data);
});

loadJSONSync('invalid.json', function(err, data){
  console.log('invalid--------------------');
  if(err) console.log('Error:' + err.message);
  else console.log(data);
});

