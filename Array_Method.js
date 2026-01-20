// ===============================
// Array Declaration
// ===============================
let arr = [40, 10, 30, 20, 50];

console.log("Original Array:", arr);
console.log("Length:", arr.length);

console.log("-------------------");

// ===============================
// Add / Remove Methods
// ===============================
arr.push(60);
console.log("push():", arr);

arr.pop();
console.log("pop():", arr);

arr.unshift(5);
console.log("unshift():", arr);

arr.shift();
console.log("shift():", arr);

console.log("-------------------");

// ===============================
// Searching Methods
// ===============================
console.log("indexOf(30):", arr.indexOf(30));
console.log("includes(20):", arr.includes(20));

console.log("-------------------");

// ===============================
// Slice & Splice
// ===============================
let slicedArr = arr.slice(1, 4);
console.log("slice(1,4):", slicedArr);

arr.splice(2, 1, 99);
console.log("splice(2,1,99):", arr);

console.log("-------------------");

// ===============================
// Iteration Methods
// ===============================
console.log("forEach():");
arr.forEach((value, index) => {
  console.log(index, value);
});

console.log("-------------------");

// ===============================
// Join & Reverse
// ===============================
console.log("join('-'):", arr.join("-"));

arr.reverse();
console.log("reverse():", arr);

console.log("-------------------");

// ===============================
// Sorting
// ===============================

// Number Sorting (Ascending)
let numArr = [40, 10, 30, 20, 50];
numArr.sort((a, b) => a - b);
console.log("Number sort ascending:", numArr);

// Number Sorting (Descending)
numArr.sort((a, b) => b - a);
console.log("Number sort descending:", numArr);

// String Sorting
let strArr = ["Banana", "Apple", "Mango", "Orange"];
strArr.sort();
console.log("String sort:", strArr);

console.log("-------------------");
