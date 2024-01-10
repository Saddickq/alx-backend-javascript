export default function getStudentIdsSum(students) {
  return students.reduce((sum, object) => sum + object.id, 0);
}
