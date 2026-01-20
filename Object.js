// Object program

let student = {
  name: "Shuvransu",
  age: 22,
  course: "JavaScript",
  isActive: true,

  displayInfo: function () {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Course:", this.course);
    console.log("Active:", this.isActive);
  },
};

// Access object properties
console.log(student.name);
console.log(student.age);

// Call object method
student.displayInfo();
