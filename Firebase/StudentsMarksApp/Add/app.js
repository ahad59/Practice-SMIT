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

auth.onAuthStateChanged((user) => {
    if (!user) {
        location.href = `/Firebase/StudentsMarksApp/Signin/index.html`;
    }
});

const addbutton = document.getElementById("add");

function addBtnClickHandler() {
    const user = auth.currentUser;

    const name = document.getElementById("studentName").value;
    const marks = document.getElementById("marks").value;

    if (!name || !marks) {
        alert("Please fill in both the fields.");
        return;
    }

    const collectionRef = db.collection("StudentsMarksApp");
    collectionRef
    .add({
        name,
        marks,
        userId: user.uid,
    })
    .then(() => {
        alert("Marks have been added successfully.");
        location.href = `/Firebase/StudentsMarksApp/MarksOfAllStudents/index.html`;
    })
    .catch((error) => {
        console.log("Error", error);
        alert(error.message);
    });
}

addbutton.addEventListener("click" ,addBtnClickHandler);