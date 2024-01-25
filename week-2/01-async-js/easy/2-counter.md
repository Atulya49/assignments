## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;
const increment = () => {
  counter++;
  console.log(counter);
};
const decrement = () => {
  if (counter > 0) counter--;
  console.log(counter);
};
setInterval(increment, 1 * 1000);
setInterval(decrement, 1 * 1000);

// set timeout
let counter = 0;
const increment = () => {
  counter++;
  console.log(counter);
};
const decrement = () => {
  if (counter > 0) counter--;
  console.log(counter);
};
setTimeout(increment, 1 * 1000);
setTimeout(decrement, 1 * 1000);






































































(Hint: setTimeout)
