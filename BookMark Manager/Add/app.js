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
        location.href = "../signedin/index.html";
    }
})

const savebookmark = document.getElementById("add");

function addBookMark () {
    const user = auth.currentUser;

    if (!user) {
        alert("Please Sign In !");
        location.href = "../signedin/index.html";
        return;
    }

    const title = document.getElementById("title").value;
    const url = document.getElementById("url").value;

    if (!title || !url) {
        alert("Kindly Fill in all fields!");
        return;
    }

    const collectionRef = db.collection("bookmarks");
    collectionRef.add({
        title,
        url,
        userId: user.uid,
    })
    .then(() => {
        alert("New BookMark has been added.");
        location.href = "../myBookMarks/index.html";
    })
    .catch((error) => {
        console.log("Error ===", error);
        alert(error.message);
    });
}

savebookmark.addEventListener("click", addBookMark)