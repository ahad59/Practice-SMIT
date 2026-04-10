const marksCalculation = document.getElementById("container");
const firstSubject = marksCalculation.querySelector("#sub1");
const secondSubject = marksCalculation.querySelector("#sub2");
const thirdSubject = marksCalculation.querySelector("#sub3");
const calculateButton = marksCalculation.querySelector("#calculateBtn");
const result = marksCalculation.querySelector("#result");

calculateButton.addEventListener("click", calculateResult)

function calculateResult () {
    const fs = firstSubject.value;
    const ss = secondSubject.value;
    const ts = thirdSubject.value;

    if (fs === "" || ss === "" || ts === "") {
        result.innerText = "Enter all the marks";
        result.style.color = "red";
        return;
    }

    if (fs > 100 || fs < 0 || ss > 100 || ss < 0 || ts > 100 || ts < 0) {
        result.innerText = " Enter vaild marks";
        result.style.color = "red"
        return;
    }

    const total = Number(fs) + Number(ss) + Number(ts);
    const percentage = total / 3;

    let grade = "";

    if (percentage >= 80){
        grade = "A";
    }
    else if (percentage >= 60) {
        grade = "B";
    }
    else if (percentage >= 40) {
        grade = "C";
    }
    else {
        grade = "F";
    }

    result.innerText = " | Total Marks Secured: " + total + "\n" + 
    " | Percentage achieved: " + percentage.toFixed(2) + "%" + "\n" +
    " | You managed to achieve Grade " + grade;
    result.style.color = "green";

    firstSubject.value = "";
    secondSubject.value = "";
    thirdSubject.value = "";
}