interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "saddiq",
    lastName: "Abubaker",
    age: 30,
    location: "Tamale",
} 
const student2: Student = {
    firstName: "Dawuni",
    lastName: "Abdulai",
    age: 40,
    location: "Tamale",
}

const studentsList: Array<Student> = [student1, student2];
console.table(studentsList);