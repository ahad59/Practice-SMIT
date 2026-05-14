"use strict";
const childrens = [];
const addChildren = (name, age, rollno) => {
    const newChildren = { name, age, rollno };
    childrens.push(newChildren);
    console.log(`Student ${name} added successfully.`);
};
// remove children
//const removeChildren = (rollno: number): void => {
//}
// list of all the students
const listChildren = () => {
    if (childrens.length === 0) {
        console.log("No students found.");
        return;
    }
    console.log("---Students List----");
    childrens.forEach((s) => {
        console.log(`Name: ${s.name} | Age: ${s.age} | RollNo: ${s.rollno}`);
    });
};
// Search by Name
const searchByName = (name) => {
    const found = childrens.find((s) => s.name.toLowerCase() === name.toLowerCase());
    if (found) {
        console.log(`Student found => Name: ${found.name} | Age: ${found.age} | Roll No: ${found.rollno}`);
    }
    else {
        console.log(`Student with ${name} not found.`);
    }
};
// Search by RollNo
const searchByRollNo = (rollno) => {
    const found = childrens.find((s) => s.rollno === rollno);
    if (found) {
        console.log(`Student Found => Name: ${found.name} | Age: ${found.age} | Roll No: ${found.rollno}`);
    }
    else {
        console.log(`Student with Roll No ${rollno} not found.`);
    }
};
//Testing
addChildren("Abdul Ahad", 22, 68047);
addChildren("Mustafa", 21, 67946);
addChildren("Abdullah", 21, 68046);
console.log("\n----List---");
listChildren();
console.log("\n---Search By Name----");
searchByName("Mustafa");
console.log("\n---Search By Roll No----");
searchByRollNo(68047);
