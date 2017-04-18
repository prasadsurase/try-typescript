let promise = new Promise((resolve, reject) => {
  reject(new Error('Something went wrong. Please try again later'));
});

promise.then((res) => {
  console.log('Success: ' + res);
});

promise.catch((err) => {
  console.log('Screwed: ' + err.message);
});

