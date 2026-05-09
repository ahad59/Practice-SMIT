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
const elephant2 = new Elephant('Daizy', 5);
console.log("===Elephant details======");
elephant1.isHunting();
elephant2.isHunting();
class Flyingobj {
    name;
    constructor(name) {
        this.name = name;
    }
    ;
    flying() {
        console.log(`${this.name} is flying right now.`);
    }
}
class Eagle extends Flyingobj {
    eating() {
        console.log(`${this.name} is eating.`);
    }
}
const myeagle = new Eagle("my eagle");
myeagle.eating();
myeagle.flying();
class Human {
    name;
    constructor(name) {
        this.name = name;
    }
    // Regular method
    move() {
        console.log(`${this.name} is moving`);
    }
}
class Zain extends Human {
    makeSound() {
        console.log("Hurray!");
    }
}
const zain = new Zain("Buddy");
zain.makeSound();
zain.move(); // Buddy is moving
// arrow function is a shorter way to write a function,
// it stores the entire function in a variable, 
// it also passes a function as an argument.
// here the actual function starts from = (a,b)
const myFoo = (a, b) => {
    if (b) {
        const value = a + b;
    }
    console.log(a);
    return 123;
};
let f = ["one", 1];
// true cannot be pushed because it is boolean and only string and number data types can be stored only.
// f.push(true);
let g = [1];
g.push(2);
//"" cannot be pushed because it is a string data type and here only number data type can be stored.
//g.push("");
// this is array of objects
let h = [];
let i = {
    name: "abc",
    fatherName: "def",
};
i.rollNo = 5;
if (i.rollNo) {
    i.rollNo++;
}
function myFunc(a, b) {
    if (b) {
        const value = a + b;
        return value;
    }
    return 0;
}
const k = myFunc(1, 2);
const l = (a, b) => {
    return 0;
};
const m = (a, b) => {
    return a + b;
};
