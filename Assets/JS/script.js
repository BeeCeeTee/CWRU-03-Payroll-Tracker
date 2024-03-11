// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let employeesArray = [];

const collectEmployees = function() {
  let addAnother = true;
  // Prompt to get first name
  while (addAnother) {
    let fName = window.prompt('Please enter your first name', 'First Name');
      if (!fName) {
        alert('Please enter your first name')
        fName = window.prompt('Please enter your first name', 'First Name');
      }
    // Prompt to get last name 
    let lName = window.prompt('Please enter your last name', 'Last Name');
      if (!lName) {
        alert('Please enter your last name')
        lName = window.prompt('Please enter your last name', 'Last Name');
      }
    // Prompt to get salary - checks to verify it's a valid number
    let salary = window.prompt('Please enter your salary (without currency symbol, commas or periods, as shown below)', '123456789');
      if (!salary) {
        alert('Please enter a valid salary (a number without any punctuation symbols)');
        salary = window.prompt('Please enter your salary (a number without any punctuation)', '123456789');
      }
      else if (isNaN(salary)) {
        alert('Please enter a valid salary (a number without any punctuation symbols)');
        salary = window.prompt('Please enter your salary (a number without any punctuation)', '123456789');
      }
    // Confirmation window to add another employee or cancel
    addAnother = window.confirm('Would you like to add another employee?')
    // Put prompt input into an object
    const employeeData = {
      firstName: fName,
      lastName: lName,
      salary: salary
    }
    // Push the object to the employeesArray array and end the function
    employeesArray.push(employeeData)
  }
  return employeesArray
}

// Display the average salary
let salaryNumbers = []
// Iterate through the employeesArray and push all salary input into a new array, salaryNumbers
const displayAverageSalary = function(employeesArray) { 
  let length = employeesArray.length;
  for (let i = 0; i < length; i++) {
    salaryNumbers.push(parseInt(employeesArray[i].salary));
  }
  // Calculate the average of the numbers in salaryNumbers
  let sum = 0;
  for(let i = 0; i < salaryNumbers.length; i++) {
    sum += salaryNumbers[i];
  }
  const average = sum / salaryNumbers.length;
  // Determine the number of employees and log the number and calculate average into the console
  const employeeNumber = employeesArray.length;
  console.log(`The average salary between our ${employeeNumber} employees is $${average}. `)
}

// Select a random employee from the employeesArray
const getRandomEmployee = function(employeesArray) {
  const randomEmployee = employeesArray[(Math.floor(Math.random()*employeesArray.length))];
  // Access only the first and last name properties of the selected employeesArray object
  rfName = randomEmployee.firstName
  rlName = randomEmployee.lastName
  // Log the randomly selected employee in the console
  console.log(`Congratulations ${rfName} ${rlName}, you were selected as this month's winner!!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
