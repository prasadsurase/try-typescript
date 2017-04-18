let promise = new Promise((resolve, reject) => {
  resolve(123);
});

promise.then((res) => {
  console.log('Got here first ', + res);
  return 456;
}).then((res) => {
  console.log('Then got here ', + res);
});
