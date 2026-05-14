interface Person {
    name: string;
    age: number;
    id: number;
}

interface Teacher extends Person {
    subject: string;
}

interface Studentt extends Person {
    enrolledSubjects: string[];
}

const Teachers: Teacher[] = [];
const Students: Studentt[] = [];

const addTeacher = (name: string, age: number, id: number, subject: string): void => {
    const newTeacher: Teacher = {name, age, id, subject};
    Teachers.push(newTeacher);
    console.log(`Teacher ${name} added successfully.`);
};

const addStudent = (name: string, age: number, id: number): void => {
    const newStudent: Studentt = {name, age, id, enrolledSubjects: [] };
    Students.push(newStudent);
    console.log(`Student ${name} added successfully.`);
};

const assignSubject = (teacherId: number, subject: string): void => {
    const teacher = Teachers.find((t) => t.id === teacherId);
    if (teacher) {
        teacher.subject = subject;
    console.log(`Subject ${subject} assigned to teacher ${teacher.name} successfully.`);
    }
    else {
        console.log(`Teacher with ID ${teacherId} not found.`);
    }
};

const enrollStudent = (studentId: number, subject: string): void => {
    const student = Students.find((s) => s.id === studentId);
    if (student) {
        if (student.enrolledSubjects.includes(subject)) {
            console.log(`Student ${student.name} is already enrolled in ${subject}.`);
        }
        else {
            student.enrolledSubjects.push(subject);
        }
    }
    else {
        console.log(`Student with id ${studentId} not found.`);
    }
};

const listTeachers = (): void => {
    if (Teachers.length === 0) {
        console.log("No teachers found.");
        return;
    }
    console.log("===Teachers List====");
    Teachers.forEach((t) => {
        console.log(`Name: ${t.name} | Age: ${t.age} | ID: ${t.id} | Subject: ${t.subject}`);
    });
};

const listStudents = (): void => {
    if (Students.length === 0) {
        console.log("No students found.");
        return;
    }
    console.log("====Students List====");
    Students.forEach((s) => {
        console.log(`Name: ${s.name} | Age: ${s.age} | ID: ${s.id} | Enrolled Subjects: ${s.enrolledSubjects.length === 0 ? "None" : s.enrolledSubjects.join(", ")}`);
    });
};


console.log("---Adding Teachers----");
addTeacher("Ahad", 22, 1, "Math");
addTeacher("Hadi", 24, 2, "English");
addTeacher("Wahab", 20, 3, "Physics");

console.log("\n----Adding Students");
addStudent("Ali", 19, 101);
addStudent("Asad", 20, 102);

console.log("\n");
listTeachers();
listStudents();

console.log("\n---Assigning Subjects----");
assignSubject(1, "Biology");
assignSubject(2, "Chemistry");

console.log("\n---Enrolling Students----");
enrollStudent(101, "Math");
enrollStudent(102, "English");

console.log("\n-----List of Students after Enrollment.");
listStudents();

console.log("\n-----List of Teachers after Subject Change.");
listTeachers();
