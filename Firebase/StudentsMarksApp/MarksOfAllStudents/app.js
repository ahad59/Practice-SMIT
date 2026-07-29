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
        location.href = `/Firebase/StudentsMarksApp/Signin/index.html`;
    }
    fetchStudentsMarks(user.uid);
});

const addButton = document.getElementById("add-marks");
const studentWrapper = document.getElementById("Student-wrapper");

function addBtnClickHandler () {
    location.href = `/Firebase/StudentsMarksApp/Add/index.html`;
}

addButton.addEventListener("click", addBtnClickHandler);

async function fetchStudentsMarks(userId) {
    studentWrapper.innerHTML = "";
    const collectionRef = db.collection("StudentsMarksApp");
    const query = collectionRef.where("userId", "==", userId);
    const qsnapshot = await query.get();
    qsnapshot.forEach((doc) => {
        const StudentsMarksApp = {
            ...doc.data(),
            id: doc.id,
        };
        renderCard(StudentsMarksApp);        
    });
}

function deleteClickHandler (id) {
    const collectionRef = db.collection("StudentsMarksApp");
    const docRef = collectionRef.doc(id);
    docRef
    .delete()
    .then(() => {
        alert("This Students marks have ben deleted successfully.");
        fetchStudentsMarks();
    })
    .catch ((error) => {
        alert(error.message);
    });
}

function editBtnHandler (id) {
    location.href = `/Firebase/StudentsMarksApp/Update/index.html`
}

function renderCard({id, name, marks}) {
    const html = `<div class='marks' id=${id}>
      <h2>${name}</h2>
      <p>Marks: ${marks}</p>
      <button onclick='deleteClickHandler("${id}")'>Delete</button>
      <button onclick='editBlogHandler("${id}")'>Edit</button>
      </div>`;

  studentWrapper.innerHTML += html;
}