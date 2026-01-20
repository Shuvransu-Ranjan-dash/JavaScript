// Closure example

function outerFunction() {
  let count = 0; // outer variable

  function innerFunction() {
    count++;
    console.log("Count:", count);
  }

  return innerFunction;
}

let counter = outerFunction();

counter();
counter();
counter();
