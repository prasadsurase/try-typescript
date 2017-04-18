var promise = new Promise(function (resolve, reject) {
    reject(new Error('Something went wrong. Please try again later'));
});
promise.then(function (res) {
    console.log('Success: ' + res);
});
promise["catch"](function (err) {
    console.log('Screwed: ' + err.message);
});
