export default function createReportObject(employeesList) {
  const workers = {
    allEmployees: employeesList,
    getNumberOfDepartments: () => Object.keys(employeesList).length,
  };
  return workers;
}
