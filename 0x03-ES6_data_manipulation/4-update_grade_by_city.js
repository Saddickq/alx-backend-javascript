export default function updateStudentGradeByCity(studentsList, city, newGradesLists) {
  const sameLocation = studentsList.filter((student) => student.location === city);
  const mergedArray = sameLocation.map((student) => {
    const matchedId = newGradesLists.find((grade) => student.id === grade.studentId);
    if (matchedId) return { ...student, grade: matchedId.grade };
    return { ...student, grade: 'N/A' };
  });
  return mergedArray;
}
