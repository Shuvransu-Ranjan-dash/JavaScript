// Nested function example

function outerFunction() {
  let outerVar = "I am outer";

  function innerFunction() {
    console.log(outerVar);
  }

  innerFunction();
}

outerFunction();
