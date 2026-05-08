"use strict";
const student1 = {
    StudentName: "Ali",
    Age: 25,
    RollNo: 318860,
};
const student2 = {
    StudentName: "Kumail",
    Age: 30,
    RollNo: 5992,
};
const student3 = {
    StudentName: "Abdul Ahad",
    Age: 22,
    RollNo: 68047,
};
const students = [student1, student2, student3];
const studentObj1 = {
    name: "Ali",
    age: 25,
    rollNo: 318860,
    sleep: () => console.log("sleeping"),
    eat: () => console.log("eating"),
    wakeup: () => console.log("wokeup"),
};
const teacher1 = {
    name: "Alia",
    subject: "math",
    id: 676847,
    sleep: () => console.log("sleeping"),
    eat: () => console.log("eating"),
    wakeup: () => console.log("wokeup"),
};
const teacher2 = {
    name: "pqr",
    subject: "science",
    id: 98367,
    sleep: () => console.log("sleeping"),
    eat: () => console.log("eating"),
    wakeup: () => console.log("wokeup"),
};
const teachers = [teacher1, teacher2];
console.log("=== Students ===");
console.log(students);
console.log("=== Teachers ===");
console.log(teachers);
console.log("=== Teacher Actions ===");
teacher1.sleep();
teacher1.eat();
teacher1.wakeup();
// OOP concepts Abstraction, Polymorphism, Inheritence and Encapsulation
class Animal {
    name;
    age;
    isSleeping = true;
    isAwake = false;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
    eating() {
        console.log(`${this.name} is eating its food.`);
    }
}
class Elephant extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    isHunting() {
        if (this.isSleeping) {
            console.log(`${this.name} cannot hunt while sleeping.`);
        }
        else {
            console.log(`${this.name} is hunting for food.`);
        }
    }
}
const elephant1 = new Elephant('Peter', 3);
const elephant2 = new Elephant('daizy', 5);
console.log("===Elephant details======");
elephant1.isHunting();
elephant2.isHunting();
