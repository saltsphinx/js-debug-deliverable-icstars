// These two functions are broken in some way...
// What went wrong? What needs to be fixed?
// How do we know if it's fixed or not?
// Hint: using a console.log may be useful...

let result1 = "Adam Alexander Jones\nDepartment: Engineering | Salary: 74000";
let employee1 = {
  employee_id: 1,
  first_name: "Adam",
  middle_name: "Alexander",
  last_name: "Jones",
  department: "Engineering",
  salary: 74000,
};

let employee3 = {
  employee_id: 4,
  first_name: "Charlie",
  middle_name: "",
  last_name: "Andrews",
  department: "Engineering",
  salary: "79000",
};

export function employeeInfoToString(employee) {
  let full_name = generateFullName(
    employee.first_name,
    employee.middle_name,
    employee.last_name
  );

  return `${full_name}\nDepartment: ${employee.department} | Salary: ${employee.salary}`;
}

function generateFullName(first_name, middle_name, last_name) {
  return `${first_name}${
    middle_name != null && middle_name != "" ? " " + middle_name + " " : " "
  }${last_name}`;
}

console.log(result1);
