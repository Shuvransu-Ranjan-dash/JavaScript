
// ========================================
// 1Reverse a String
// ========================================
function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Test
console.log("Reverse of 'JavaScript':", reverse("JavaScript"));
console.log("--------------------------------");


// ========================================
//  Comparator Function to Sort Array of Objects
// ========================================
let circles = [{ radius: 5 }, { radius: 9 }, { radius: 2 }];

// Comparator function
function compareByRadius(a, b) {
  return a.radius - b.radius;
}

// Sort the array
circles.sort(compareByRadius);

// Test
console.log("Sorted by radius:", circles);
console.log("--------------------------------");


// ========================================
// Length of Array (counting explicit undefined)
// ========================================
function length_of_array(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.hasOwnProperty(i)) {
      count++;
    }
  }
  return count;
}

// Test
let x = [];
x[0] = 10;
x[2] = undefined; // explicit undefined
x[5] = 30;        // sparse indices

console.log("Actual array length property:", x.length);
console.log("Counted elements:", length_of_array(x));

