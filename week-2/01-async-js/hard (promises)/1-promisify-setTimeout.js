/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((p) => {
    setTimeout(() => {
      p(`Promise resolved after ${n} seconds`);
    }, n * 1000);
  });
}

wait(5)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

module.exports = wait;
