export default function createEmployeesObject(departmentName, employees) {
  const object = {};
  object[departmentName] = employees;

  return object;
}
