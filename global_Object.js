// Global object program (Node.js)

// Global variable
global.company = "Tech Corp";

function showCompany() {
  console.log("Company Name:", global.company);
}

showCompany();

// Global function
global.sayHello = function () {
  console.log("Hello from Global Object");
};

sayHello();
