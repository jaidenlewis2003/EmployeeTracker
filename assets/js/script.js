// Get a reference to the #add-employees-btn element
// const addEmployeesBtn = document.querySelector('#add-employees-btn');
const btnAddEmployee = document.getElementById("add-employees-btn")
const employeeTable = document.getElementById("employee-table")

//step 1: add  a event to your button



//Mock data 
// Collect employee data
//let employees = ['Jaiden' , 'Jordan' , 'Stanley' , 'Jacqueline'] 
let employees = [{
  firstName: 'Stanley',
  lastName: 'Lewis',
  currentlyEmployed: true,
  employees.getFullName = funtion () {
    console.log (employees)
    return `${employees.firstName} ${employees.lastName}`
  },
  salary: 100000
   
},
{
  firstName: 'Jaiden', 
  lastName: 'Lewis', 
  currentlyEmployed: true,
  salary: 60000
}, 
{
  firstName: 'Jordan', 
  lastName: 'Lewis', 
  currentlyEmployed: true,
  salary: 80000 
}


];

let topPerformingEmployee = employees.filter(x => x.salary === 100000)


// const EmployeesAverageSalary = "$" + 70000 + "/yr"

//Stanley Tradeark
//INPUT > DOWORK > OUTPUT
function addEmployee (firstName, lastName, salary) {
   //DOWORK
   employees.push({
    firstName,
    lastName,
    salary
   })
   return "Employee added";

}
//function filterEmployee ()





function addEmployeeToDisplay (employee) {
  employeeTable.innerHTML += `
<tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.salary}</td>
</tr>

`
};




// btnAddEmployee.addEventListener("click",() => {
//   console.log(`Add employee button was clicked`)
// })

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
