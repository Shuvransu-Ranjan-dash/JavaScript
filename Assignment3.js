// ========================================
//  Find the largest string using reduce
// ========================================
function largestString(arr) {
  return arr.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    "",
  );
}

// Test
console.log(largestString(["apple", "banana", "grapefruit", "kiwi"]));
console.log("--------------------------------");

// ========================================
//  Sum of squares of numbers
// ========================================
function sumOfSquares(arr) {
  return arr.map((n) => n * n).reduce((sum, n) => sum + n, 0);
}

// Test
console.log(sumOfSquares([1, 2, 3])); // 14
console.log("--------------------------------");

// ========================================
// Filter even numbers
// ========================================
function getEvenNumbers(arr) {
  return arr.filter((n) => n % 2 === 0);
}

// Test
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("--------------------------------");

// ========================================
//  Reject elements based on criteria
// (opposite of filter)
// ========================================
function reject(arr, criteriaFn) {
  return arr.filter((element) => !criteriaFn(element));
}

// Test
const isEven = (n) => n % 2 === 0;

console.log(reject([1, 2, 3, 4, 5, 6], isEven)); // odd numbers
