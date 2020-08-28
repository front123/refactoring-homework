const employeeTest = require('ava')
const { Employee } = require('../src/employee')

employeeTest('should return front (engineer) when toString given a employee with engineer type and front name', t => {
  let employee = new Employee('front', 'engineer');
  let result = employee.toString();

  t.is(result, `front (engineer)`);
})
