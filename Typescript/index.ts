type Student = {
  StudentName: string;
  Age: number;
  RollNo: number;
};

const student1: Student = {
  StudentName: "Ali",
  Age: 25,
  RollNo: 318860,
};
const student2: Student = {
  StudentName: "Kumail",
  Age: 30,
  RollNo: 5992,
};
const student3: Student = {
  StudentName: "Abdul Ahad",
  Age: 22,
  RollNo: 68047,
};

const students: Student[] = [student1, student2, student3];

interface HumanNature {
  sleep: () => void;
  eat: () => void;
  wakeup: () => void;
}

interface Teacher extends HumanNature {
  name: string;
  subject: string;
  id: number;
}

const studentObj1: Student1 = {
  name: "Ali",
  age: 25,
  rollNo: 318860,
  sleep: () => console.log("sleeping"),
  eat: () => console.log("eating"),
  wakeup: () => console.log("wokeup"),
};

interface Student1 extends HumanNature {
  name: string;
  age: number;
  rollNo: number;
}

const teacher1: Teacher = {
  name: "Alia",
  subject: "math",
  id: 676847,
  sleep: () => console.log("sleeping"),
  eat: () => console.log("eating"),
  wakeup: () => console.log("wokeup"),
};

const teacher2: Teacher = {
  name: "pqr",
  subject: "science",
  id: 98367,
  sleep: () => console.log("sleeping"),
  eat: () => console.log("eating"),
  wakeup: () => console.log("wokeup"),
};

const teachers: Teacher[] = [teacher1, teacher2];

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
  name: string;
  private age: number;
  protected isSleeping: boolean = true;
  protected isAwake: boolean = false;

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }

  eating() {
    console.log(`${this.name} is eating its food.`)
  }
}

class Elephant extends Animal {

  constructor(name: string, age: number) {
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
