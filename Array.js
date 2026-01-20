// Define an array
let numbers = [10, 20, 30, 40, 50];

// Array length
console.log("Array:", numbers);
console.log("Array Length:", numbers.length);

console.log("------------");

console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("------------");

console.log("Using while loop:");
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

console.log("------------");

console.log("Using for...of loop:");
for (let value of numbers) {
  console.log(value);
}

console.log("------------");

console.log("Using forEach():");
numbers.forEach(function (value, index) {
  console.log("Index", index, "Value", value);
});

console.log("------------");
