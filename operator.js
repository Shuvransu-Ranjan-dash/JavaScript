// ===============================
// 1. Arithmetic Operators
// ===============================
let a = 10;
let b = 3;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b); // power
console.log("-----------------------");

// ===============================
// 2. Assignment Operators
// ===============================
let x = 5;
console.log("Assignment Operators:");

x += 2;
console.log("x += 2:", x);

x -= 1;
console.log("x -= 1:", x);

x *= 3;
console.log("x *= 3:", x);

x /= 2;
console.log("x /= 2:", x);
console.log("-----------------------");

// ===============================
// 3. Comparison Operators
// ===============================
let p = 10;
let q = "10";

console.log("Comparison Operators:");
console.log("p == q:", p == q); // value check
console.log("p === q:", p === q); // value + type check
console.log("p != q:", p != q);
console.log("p !== q:", p !== q);
console.log("p > 5:", p > 5);
console.log("p < 20:", p < 20);
console.log("-----------------------");

// ===============================
// 4. Logical Operators
// ===============================
let isAdult = true;
let hasID = false;

console.log("Logical Operators:");
console.log("AND (&&):", isAdult && hasID);
console.log("OR (||):", isAdult || hasID);
console.log("NOT (!):", !isAdult);
console.log("-----------------------");

// ===============================
// 5. Bitwise Operators
// ===============================
let m = 5; // 101
let n = 3; // 011

console.log("Bitwise Operators:");
console.log("m & n:", m & n);
console.log("m | n:", m | n);
console.log("m ^ n:", m ^ n);
console.log("~m:", ~m);
console.log("-----------------------");

// ===============================
// 6. Ternary Operator
// ===============================
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";
console.log("Ternary Operator:");
console.log("Result:", result);
console.log("-----------------------");

// ===============================
// 7. Type Operators
// ===============================
let name = "Shuvransu";

console.log("Type Operators:");
console.log("typeof name:", typeof name);
console.log("typeof age:", typeof age);
console.log("-----------------------");

// ===============================
// 8. String Operators
// ===============================
let firstName = "Java";
let lastName = "Script";

console.log("String Operators:");
console.log("Concatenation:", firstName + " " + lastName);
console.log("-----------------------");
