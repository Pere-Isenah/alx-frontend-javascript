import getListStudents from "./0-get_list_students.js";

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map(student => {
    const matchingGrade = newGrades.find(grade => grade.studentId === student.id);

    if (matchingGrade) {
      return { ...student, grade: matchingGrade.grade };
    } else {
      return { ...student, grade: "N/A" };
    }
  }).filter(student => student.location === city);
}
