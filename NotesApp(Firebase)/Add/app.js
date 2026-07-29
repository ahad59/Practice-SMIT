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
    if(!user) {
        location.href = "../Signin/index.html";
    }
});

const addButton = document.getElementById("add");

function addNoteClickHandler () {
    const user = auth.currentUser;

    if(!user) {
        alert("You are not logged in!");
        location.href = "../Signin/index.html";
        return;
    }

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    if(!title || !description) {
        alert("Please fill in both title and description");
        return;
    }

    const collectionRef = db.collection("notes");
    collectionRef.add({
            title,
            description,
            userId: user.uid,
    })
    .then(() => {
        alert("New Note has been added Successfully");
        location.href = "../myNotes/index.html";
    })
    .catch((error) => {
        alert(error.message);
    });
}

addButton.addEventListener("click", addNoteClickHandler);