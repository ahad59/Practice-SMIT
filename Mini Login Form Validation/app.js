const userName = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("loginbtn");
const message = document.getElementById("message");

login.addEventListener("click", loginButton);

function loginButton () {

    const userValue = userName.value;
    const passwordValue = password.value;

    if (userValue === "" && passwordValue === "") {
        message.innerText = "Please Enter Username and Password";
        message.style.color = "red";
    }
     else if (userValue === "") {
        message.innerText = "Please Enter Username";
        message.style.color = "red";
     }
    else if (passwordValue === "") {
        message.innerText = "Please Enter Password";
        message.style.color = "red";   
    }
    else if (passwordValue.length < 6 ) {
         message.innerText = "Please Enter valid Paasword";
        message.style.color = "red";    
    }
    else {
        message.innerText = "Login Successful";
        message.style.color = "green"; 
        
        userName.value = "";
        password.value = "";
    }
}
