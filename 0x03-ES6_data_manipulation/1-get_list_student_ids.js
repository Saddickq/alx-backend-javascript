export default function getListStudentIds(array) {
  const listOfKeys = [];

  if (!(Array.isArray(array))) return listOfKeys;
  array.map((object) => listOfKeys.push(object.id));
  return listOfKeys;
}
