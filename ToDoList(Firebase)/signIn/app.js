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

const signinbutton = document.getElementById("sign-in");

function signInClickHandler () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password).then(() => {
        alert("User Signed In!");
        location.href = "../myToDos/index.html";
    })
    .catch((error) => {
        console.log("Error === ", error);
        alert(error.message);
    });
}

signinbutton.addEventListener("click", signInClickHandler);