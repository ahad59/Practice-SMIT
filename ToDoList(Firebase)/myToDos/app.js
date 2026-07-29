const firebaseConfig = {
  apiKey: "AIzaSyAp2_i26_61CCelNbyRzMYjeMXmBqkmqxE",
  authDomain: "myfirstsql-1848d.firebaseapp.com",
  projectId: "myfirstsql-1848d",
  storageBucket: "myfirstsql-1848d.firebasestorage.app",
  messagingSenderId: "401450261319",
  appId: "1:401450261319:web:3741ad078c07f4e74dca62",
  measurementId: "G-66N1H1M9N2"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Redirect if not logged in, otherwise load this user's todos
auth.onAuthStateChanged((user) => {
  if (!user) {
    location.href = "../signin/index.html";
  } else {
    fetchTodos(user.uid);
  }
});

const addbutton = document.getElementById("add-todo");
const todoWrapper = document.getElementById("todo-wrapper");

function addTodoClickHandler() {
  location.href = "../addToDos/index.html";
}

addbutton.addEventListener("click", addTodoClickHandler);

async function fetchTodos(userId) {
  todoWrapper.innerHTML = "";
  const collectionRef = db.collection("todos");
  const query = collectionRef.where("userId", "==", userId);
  const qsnapshot = await query.get();

  qsnapshot.forEach((doc) => {
    const todoData = {
      ...doc.data(),
      id: doc.id,
    };
    renderCard(todoData);
  });
}

function deleteTodoHandler(id) {
  const collectionRef = db.collection("todos");
  const docRef = collectionRef.doc(id);

  docRef
    .delete()
    .then(() => {
      alert("Task deleted successfully.");
      fetchTodos(auth.currentUser.uid);
    })
    .catch((error) => {
      console.log("Error", error);
      alert(error.message);
    });
}

// Toggles the "done" field on/off using the CURRENT status passed in
function toggleDoneHandler(id, currentStatus) {
  const collectionRef = db.collection("todos");
  const docRef = collectionRef.doc(id);

  docRef
    .update({
      done: !currentStatus,
    })
    .then(() => {
      fetchTodos(auth.currentUser.uid);
    })
    .catch((error) => {
      console.log("Error", error);
      alert(error.message);
    });
}

function renderCard({ id, title, done }) {
  const html = `<div class='todo' id=${id}>
    <input type="checkbox" ${done ? "checked" : ""} onchange='toggleDoneHandler("${id}", ${done})'>
    <span style="text-decoration: ${done ? "line-through" : "none"}">${title}</span>
    <button onclick='deleteTodoHandler("${id}")'>Delete</button>
    </div>`;
  todoWrapper.innerHTML += html;
}