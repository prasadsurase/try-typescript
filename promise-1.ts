let promise = new Promise((resolve, reject) => {
  resolve(789);
});

promise.then((res) => {
  console.log('I get called: ', res === 789);
});

promise.catch((err) => {
  console.log('I get called: ', err.message);
});
