var firstName;
firstName = "abdul ahad";
console.log(firstName)

var a = "Abdul";
var b = "Ahad";
var c = a + " " + b; //concatenation addition of 2 strings
console.log(c);

var a = "2";
var b = "2"; //Number like string
 var c = a - b;
 console.log(c);

var a =  5+ "5"-5;
console.log(a);

// converstion of string number to integer type
//var userAge = prompt("Enter your age");
//var userUpdateAge = Number(userAge) + 5;
//console.log(userUpdateAge, userAge);
//var a = "25.5";
//var b = Number(a);
//var b = parseInt(a);
//var b = parseFloat(a);
//console.log(a, b);

//var birthYear = prompt(" Enter your birth year ");
//var currentYear = 2026;
//var userAge = currentYear - birthYear;
//var message = "Your age is: " +userAge
//alert(message);  

// Grade checking
 
//var studentMarks = prompt("Enter your marks");
//var isStudentAPlus = studentMarks >= 80 
//var isStudentBPlus = studentMarks >= 70 
//var isStudentCPlus = studentMarks >= 60 
//var isStudentD = studentMarks >= 40 
//var isStudentFailed = studentMarks <= 39
//
//if (isStudentAPlus) {
//    console.log("student has achieved A+");
//}
//else if (isStudentBPlus) {
//    console.log("student has achieved B+");
//}
//else if (isStudentCPlus) {
//    console.log("student has achieved C+");
//}
//else if (isStudentD) {
//    console.log("student has achieved D");
//}
//else if (isStudentFailed) {
//    console.log("The student has failed");
//}
//else {
//    console.log("Please enter valid marks")
//}

// If-else using Logical operators && ||

var useremail = "ahadnq@gmail.com";
var userpwd = "5992";
var email = prompt("Enter your E-mail");
var pwd = prompt("Enter your password");

var isEmailCorrect = email === useremail;
var isPwdCorrect = pwd === userpwd;

if (email === useremail && pwd === userpwd) {
     alert("Login successful");
}
else {
    alert("You entered invalid credentials");
}

const ourPlanet = "Earth";
let myAge = 24;
myAge = 25;
console.log(myAge);

// Shift removes the first element in the array and in unshift element is added on the left side from the starting 
const students = ["Ali", "Affan", "Ahad", "Sameer"];
const removedStudentName = students.shift();
alert("Removed Student: " + removedStudentName);
const totalStudents = students.unshift("Rehan", "Bashir");
alert("Total Class Strength is: " + totalStudents);
const indexNumber = 1
console.log(students);

// In push elements are added from the right side and in Pop elements are removed from the right side 
const teachers = ["ramiz", "hadi", "bano"];
const pushReturn = teachers.push("waleed", "saad");
alert("Students pushed: " +pushReturn);
console.log(teachers);
const popReturn = teachers.pop();
alert("Students popped: " +popReturn);
console.log(teachers);

const students10 = ["Minhas", "Arafat", "Irfan"];
const deleteItem = students10.splice(1,2, "khan");
console.log(deleteItem);
console.log(students10);

const copyTeachers = teachers.slice(2, 4);
console.log(copyTeachers);

const students20 = ["nani", "dadi", "dada", "nana"]
const copyArray = students20.toSpliced(0, 2, "owais");
console.log(copyArray, "copyarray");
console.log(students20, "students20");

const tableValue = 5;
for (let i = 1; i <= 10; i++) {
const concatenated = tableValue + " X " + i + " = " + i*tableValue;
console.log(concatenated)
}

const tableValue1 = 10;
for (let i = 1; i<=12; i++) {
    const concat = tableValue1 + " X " + i + " = " + i*tableValue1;
    console.log(concat);
}

for (let i = 10; i >0; i--) {
    console.log("Salam", i)
}

// Loopus interruptus
for (let i = 0; i < 10; i++) {
      console.log(i, "===running");

    if (i == 2) {
   break;
  }

   console.log(i,"===after-running");
 }

 const myNumbers = [1, 2, 13, 4, 5, 5, 8, 6, 8, 9, 10, 11, 12];
let isNumberFound = false;

for (let i = 0; i < myNumbers.length; i++) {
  const element = myNumbers[i];
  if (element === 13) {
    isNumberFound = true;
    break;
  }
  console.log(element);
}
console.log(isNumberFound);

const Numbers = [1, 4, 13, 0, 6, 5, 8, 9, 15, 3, 10, 11, 2];
let findingNumber = 6;

for (let i = 0; i < Numbers.length; i++) {
      const item = Numbers[i];
      if(item === findingNumber) {
        findingNumber = true;
        break;
      }
      console.log(item);
}
console.log("Number is found", findingNumber);

const email1 = "ahad@mailinator.com";
const userEnteredEmail = prompt("Enter your email to login");
const userEnteredLower = userEnteredEmail.toLowerCase();
// // debugger;

if (email1 === userEnteredLower){
    alert("Login Succesfully");
} 
else {
    alert("Invalid Credentials");
} 
console.log(email1[3],email1.length)
const userName = email1.slice(0,4)
console.log(userName)

const country = "afghanistan"
let firstLetter = country[0];
let otherLetters = country.slice(1);

firstLetter = firstLetter.toUpperCase()
otherLetters = otherLetters.toLowerCase()

const finalCountryName = firstLetter + otherLetters
console.log(finalCountryName)

const email2 = "ahadi@mailinator.com";
const startindex = email2.indexOf("@");
const userName1 = email2.slice(0,startindex);
console.log("The username is: ", userName1);


const txt = "the quick brown fox jump over a lazy queen dog";

let totalWords = 0;
 for (let i = 0; i < txt.length; i++) {
   const item1 = txt[i];
   if (item1 === " ") totalWords++;
 }
 if (totalWords) totalWords = totalWords + 1;
 console.log(totalWords);

 console.log(txt[2])
 const indexOf = txt.indexOf("this");
 const lastIndexOf = txt.lastIndexOf("q");
 console.log(indexOf, lastIndexOf);

 const userWord = "queen";
 let indexNumber1 = -1;
 for (let i = 0; i < txt.length; i++) {
   const item1 = txt.slice(i, i + userWord.length);
    console.log(item1);
   if (item1 === userWord) {
     indexNumber1 = i;
     break;
   }
 }

 console.log(indexNumber1);


 const greeting = "Hello! Hello! How're you everyone?";
 const newGreetings = greeting.replaceAll("Hello", "Hey");
 console.log(newGreetings)

 const perfume = 9000.5;
 //const totalAmount = Math.round(perfume);
 //const totalAmount = Math.ceil(perfume);
 const totalAmount = Math.floor(perfume);
 console.log(totalAmount,perfume)

 const randomNumber = Math.random()
 console.log(randomNumber)

 //console.log(computerNumber);

 let totalScore = 0;
 const target = 70;

 while (totalScore < target) {
   const userNumber = +prompt("Enter your Number");

   const randomNumber = Math.random();
   const computerNumber = Math.ceil(randomNumber * 6);
   alert("Computer number is : " + computerNumber);

   const isWicket = userNumber === computerNumber;
   if (isWicket) {
     alert("Ohho, Out by Computer (Dumb Machine)");
     break;
   } else {
     totalScore += userNumber;
     if (totalScore >= target) {
       alert("Hurrrayy! You won");
     } else {
       alert("Your total is: " + totalScore);
     }
   }
 }

 const myNumber = 55;
 //const myNewNumber = myNumber.toExponential(1)
 const myNewNumber = myNumber.toFixed(2)

 console.log(myNewNumber,myNumber)


 const date = new Date();
 const dateLocalString = date.toLocaleDateString()
 const dateIsoString = date.toISOString()
 const unixTime = date.getTime()
 console.log(date);
 console.log(dateLocalString);
 console.log(dateIsoString);
 console.log(unixTime);

 const dateString = date.toString();
console.log(date);
console.log(dateString);
console.log(date.toDateString());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());

 const days = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 const date1 = new Date();
 const day = date.getDay()
 const dayName = days[2];

 console.log(dayName);

 const today = new Date();
 const graduationDay = new Date();

 const todayYear = today.getFullYear();
 console.log(today,todayYear)
 graduationDay.setFullYear(todayYear + 1);
 console.log(graduationDay)


const word2 = "mathematics";
let guessWord1 = word2.split("");
guessWord1[1] = "_";
guessWord1[3] = "_";
guessWord1[5] = "_";
guessWord1[7] = "_";
guessWord1[9] = "_";
guessWord1 = guessWord1.join("");
alert(guessWord1);

const date3 = new Date();
const startingTime1 = date3.getTime();
console.log(startingTime1);

const userAnswers1 = [];

for (let i = 0; i < 5; i++) {
  const answer1 = prompt("Enter the missing letter");
  userAnswers1.push(answer1);
}

const finishingDate1 = new Date();
const finishingTime1 = finishingDate1.getTime();

const timeConsumedInMS1 = finishingTime1 - startingTime1;
const timeConsumedInSecs1 = timeConsumedInMS1 / 1000;
console.log(timeConsumedInSecs1);

let userWord2 = guessWord1;
for (let i = 0; i < 5; i++) {
  userWord2 = userWord2.replace("_", userAnswers1);
}

if (userWord2.toLowerCase() === word2) alert(" Ohho, Wrong word");
 else if (timeConsumedInSecs1 > 5) alert(" Ohho, too slow");
 else alert("You won, don't think you're genuis");




 

