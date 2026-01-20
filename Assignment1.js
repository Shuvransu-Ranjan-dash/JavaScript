// ========================================
// 1️ Check if a number is an Integer
// ========================================
function is_integer(value) {
  return Number.isInteger(value);
}

// Test
console.log("is_integer(10):", is_integer(10));
console.log("is_integer(10.5):", is_integer(10.5));
console.log("--------------------------------");

// ========================================
// 2️ Sum of array using forEach
// ========================================
function add_all(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}

// Test
console.log("Sum of array:", add_all([10, 20, 30, 40]));
console.log("--------------------------------");

// ========================================
// 3️ Temperature Conversion
// ========================================
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

// Test
console.log("25°C to Fahrenheit:", celsiusToFahrenheit(25));
console.log("77°F to Celsius:", fahrenheitToCelsius(77));
console.log("--------------------------------");

// ========================================
// 4️ Factorial Function
// ========================================
function factorial(n) {
  if (n < 0) return "Invalid input";

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Test
console.log("Factorial of 5:", factorial(5));
console.log("--------------------------------");
