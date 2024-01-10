export default function getStudentsByLocation(students, city) {
  return students.filter((objects) => objects.location === city);
}
