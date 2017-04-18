var promise = new Promise(function (resolve, reject) {
    resolve(789);
});
promise.then(function (res) {
    console.log('I get called: ', res === 789);
});
promise["catch"](function (err) {
    console.log('I get called: ', err.message);
});
