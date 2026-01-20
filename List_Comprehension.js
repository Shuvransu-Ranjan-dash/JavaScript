// Original array
let numbers = [1, 2, 3, 4, 5, 6];

console.log("Original Array:", numbers);

// ------------------------------
// map() -> transforms each element
// ------------------------------
let squares = numbers.map((num) => num * num);
console.log("After map() - Squares:", squares);

// ------------------------------
// filter() -> selects elements based on condition
// ------------------------------
let evenSquares = squares.filter((num) => num % 2 === 0);
console.log("After filter() - Even Squares:", evenSquares);

// ------------------------------
// reduce() -> reduces array to single value
// ------------------------------
let sumOfEvenSquares = evenSquares.reduce((sum, num) => sum + num, 0);
console.log("After reduce() - Sum of Even Squares:", sumOfEvenSquares);
