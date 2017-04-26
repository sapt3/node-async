//Basic code to demo the async operation of node js
//We are using non-blocking i/o so we don't have to wait for the task.

console.log("Starting app");

setTimeout(() => {
  console.log("Inside callback");
}, 2000);


setTimeout(() => {
  console.log("Running second callback");
}, 0);

console.log("Finishing app");


/*
Output
Starting app
Finishing app --> Why does this run before second callback which has 0ms timeoutl
Running second callback
Inside callback
*/
