var asyncadd = (a, b) => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
        if(typeof a === 'number' && typeof b === 'number'){
          resolve(a + b);
        }
        else {
          reject('Arguments must be numbers')
        }
    },2000)
  });
}

asyncadd(5,492432332131231312313123142).then((res) => {
  console.log("Result: ", res);
}, (error) => {
  console.log("Failure: ", error);
});
// var promise =  new Promise( (resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hey man");
//     reject('Unable to fulfill promise!');
//   },2500);
//
// });
//
// promise.then((message) => {
//   console.log('Success:', message);
// }, (errorMessage) => {
//   console.log("Error: ", errorMessage);
// })
