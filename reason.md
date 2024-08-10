1. // What went wrong? What needs to be fixed?
  - Line 7 has two first names, middle_name would be the fix 
  - Line 9 and 10 are incorrect. Move content on line 10 to line 9 and add new line escape character
  - in `employeeInfoToString`'s return statement, a space is missing between the salary and embed expression
  - in `generateFullName`'s return statement, middle name is only checked for being null instead of an empty string. add in a check for an empty string also.

2. // How do we know if it's fixed or not?
  - By running main.js with the node command to see test results
  - By using `console.log` to log results, and by copy/pasting employee objects from main.js