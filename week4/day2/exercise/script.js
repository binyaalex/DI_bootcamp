// exercise 1
// Create a one line function that receives two numbers as parameters and returns the sum.
const sum = (x,y) => console.log(y+x);
sum(2,3);

// exercise 2
// Analyse the code below, and before executing it, predict the outcome of the last line.
const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3);
// 13

// exercise 3 
// Analyse the code below, and before executing it, predict the outcome of the last line.
const sum1 = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);
// 31

// exercise 4
// Analyse the code below, and before executing it, predict the outcome of the last line.
const sum2 = (a, b) => a + b;
const curriedSum1 = (a) => (b) => a + b;
const add5 = curriedSum1(5);
add5(12);
// 17
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5more = (num) => num + 5;
compose(add1, add5more)(10)
// 16