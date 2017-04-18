var promise = new Promise(function (resolve, reject) {
    resolve(123);
});
promise.then(function (res) {
    console.log('Got here first ', +res);
    return 456;
}).then(function (res) {
    console.log('Then got here ', +res);
});
