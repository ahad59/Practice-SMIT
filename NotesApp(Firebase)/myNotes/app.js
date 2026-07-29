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

auth.onAuthStateChanged ((user) => {
    if(!user) {
        location.href = "../Signin/index.html";
    } else {
        fetchNotes(user.uid);
    }
});

const addButton = document.getElementById("add-note");
const noteWrapper = document.getElementById("note-wrapper");

function addNoteClickHandler() {
    location.href = "../Add/index.html";
}

addButton.addEventListener("click", addNoteClickHandler);

async function fetchNotes(userId) {
    noteWrapper.innerHTML = "";
    const collectionRef = db.collection("notes");
    const query = collectionRef.where("userId", "==", userId);
    const qsnapshot = await query.get();
    qsnapshot.forEach((doc) => {
        const notesData = {
            ...doc.data(),
            id: doc.id,
        };
        renderCard(notesData);
    });
}

function deleteNoteHandler(id) {
    const collectionRef = db.collection("notes");
    const docRef = collectionRef.doc(id);
    docRef.delete().then(() => {
        alert ("Note deleted Successfully.");
        fetchNotes(auth.currentUser.uid);
    })
    .catch((error) => {
        console.log("Error ==", error);
        alert(error.message);

    });
}

function editNoteHandler(id) {
    location.href = `../Edit/index.html?id=${id}`;
}

function renderCard ({id, description, title}) {
    const html = `<div class='note' id=${id}>
      <h2>${title}</h2>
      <p>${description}</p>
      <button onclick='deleteNoteHandler("${id}")'>Delete</button>
      <button onclick='editNoteHandler("${id}")'>Edit</button>
      </div>`;

      noteWrapper.innerHTML += html;
}
