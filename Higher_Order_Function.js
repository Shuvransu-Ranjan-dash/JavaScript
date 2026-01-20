// Higher-Order Function example

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log("Addition:", calculate(10, 5, add));
console.log("Multiplication:", calculate(10, 5, multiply));

// Anonymous function example

let greet = function (name) {
  console.log("Hello", name);
};

greet("Shuvransu");
