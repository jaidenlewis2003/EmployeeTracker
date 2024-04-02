// Get a reference to the #add-employees-btn element
// const addEmployeesBtn = document.querySelector('#add-employees-btn');

//step 1: add  a 


//Mock data 
// Collect employee data
//let employees = ['Jaiden' , 'Jordan' , 'Stanley' , 'Jacqueline'] 
const employees = [{
  firstName: 'Stanley',
  lastName: 'Lewis',
  salary: 100000
   
},
{
  firstName: 'Jaiden', 
  lastName: 'Lewis', 
  salary: 60000
}, 
{
  firstName: 'Jordan', 
  lastName: 'Lewis', 
  salary: 80000 
}

]
// const EmployeesAverageSalary = "$" + 70000 + "/yr"

//Stanley Tradeark
//INPUT > DOWORK > OUTPUT
function addEmployee (firstName, lastName, salary) {
   //DOWORK
   return "Employee added";

}


console.log(addEmployee());

// const collectEmployees = (function()) {
//   // TODO: Get user input to create and return an array of employee objects
// }

// // Display the average salary
// const displayAverageSalary = function(employeesArray) {
//   // TODO: Calculate and display the average salary
// }

// if (employees){
//   console.log("Current empolyees of Warner Media");
// }else {
//   console.log("No longer works for employer");
// }

// const randomEmployee = ("e"employees[2])


// // Select a random employee
// const getRandomEmployee = function(employeesArray) {
//   // TODO: Select and display a random employee
// }

// /*
//   ====================
//   STARTER CODE
//   Do not modify any of the code below this line:
// */

// // Display employee data in an HTML table
// const displayEmployees = function(employeesArray) {
//   // Get the employee table
//   const employeeTable = document.querySelector('#employee-table');

//   // Clear the employee table
//   employeeTable.innerHTML = '';

//   // Loop through the employee data and create a row for each employee
//   for (let i = 0; i < employeesArray.length; i++) {
//     const currentEmployee = employeesArray[i];

//     const newTableRow = document.createElement("tr");

//     const firstNameCell = document.createElement("td");
//     firstNameCell.textContent = currentEmployee.firstName;
//     newTableRow.append(firstNameCell);

//     const lastNameCell = document.createElement("td");
//     lastNameCell.textContent = currentEmployee.lastName;
//     newTableRow.append(lastNameCell);

//     const salaryCell = document.createElement("td");
//     // Format the salary as currency
//     salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
//       style:"currency",
//       currency:"USD"
//     });

//     newTableRow.append(salaryCell);

//     employeeTable.append(newTableRow);
//   }
// }

// const trackEmployeeData = function() {
//   const employees = collectEmployees();

//   console.table(employees);

//   displayAverageSalary(employees);

//   console.log('==============================');

//   getRandomEmployee(employees);

//   employees.sort(function(a,b) {
//     if (a.lastName < b.lastName) {
//       return -1;
//     } else {
//       return 1;
//     }
//   });

//   displayEmployees(employees);
// }

// // Add event listener to 'Add Employees' button
// addEmployeesBtn.addEventListener('click', trackEmployeeData);
