const inputTask = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addtask);

function addtask () {
    const taskValue = inputTask.value;

    if (taskValue === "") {
        alert("You have not entered task!");
        return;
    }

     taskList.innerHTML += `
    <li>
      ${taskValue}
      <button class="deleteBtn" onclick="deleteTask(this)">Delete</button>
    </li>
  `;

  taskInput.value = "";
}

function deleteTask (button) {
    button.parentElement.remove();
}