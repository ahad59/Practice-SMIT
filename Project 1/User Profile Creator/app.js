const create = document.getElementById("container");

const cbutton = create.querySelector("#createButton");
const firstName = create.querySelector("#fname");
const lastName = create.querySelector("#lname");
const age = create.querySelector("#age");
const message = create.querySelector("#output");

let users = [];

function User (firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

User.prototype.updateName = function(newName, newLastName, newAge) {
  this.firstName = newName;
  this.lastName = newLastName;
   this.age = newAge;
};

cbutton.addEventListener("click", createButton);

function createButton () {
    const fname = firstName.value;
    const lname = lastName.value;
    const userAge = age.value;

    //if (fname === "" || lname === "" || userAge === "") {
        
        //message.innerHTML = "Please enter valid details";
        //message.style.color = "red";
       // return;
    //}

    try {
      if (fname === "" && lname === "" && userAge === "") {
      throw new Error("Enter valid credentials");
      }
      else if (fname === "") {
        throw new Error("Enter first name please");
      }
      else if (lname === "") {
        throw new Error("Enter last name please");
      }
      else if (userAge === "") {
        throw new Error("Enter your age please");
      }
    } catch (error) {
      alert("Error Appeared");
      console.log(error.message);

      message.innerHTML = error.message;
      message.style.color = "red";
      return;
    }


    const newUser = new User (fname,lname,userAge);

    users.push(newUser);
    
    message.innerHTML = "Name: " + newUser.firstName + " " + newUser.lastName + "<br>" +
    "Age: " + newUser.age;

  message.style.color = "green";

  firstName.value = "";
  lastName.value = "";
  age.value = "";

  displayUsers();

    }

    function displayUsers() {
    message.innerHTML = "";

    for (let i = 0; i < users.length; i++) {

       message.innerHTML += `
      <div class="user-card">
        <b>${i + 1}.) </b> ${users[i].firstName} ${users[i].lastName} <br>
        <b>Age:</b> ${users[i].age}

        <button id="update" onclick ="updateUser(${i})">Update</button>
        <button id="delete" onclick ="deleteUser(${i})">Delete</button>
      </div>
    `;
    }
  }

    function deleteUser(index) {
    users.splice(index,1);
    displayUsers();
  }

    function updateUser(index) {
      let newName = prompt("Enter new first name");
      let newLastName = prompt("Enter new last name");
      let newAge = prompt("Enter new age");

      if (newName === "" || newName === null || newLastName === "" || newLastName === null || newAge === "" || newAge === null) {
        return;
      }
    
      users[index].updateName(newName, newLastName, newAge);

      displayUsers();
    }