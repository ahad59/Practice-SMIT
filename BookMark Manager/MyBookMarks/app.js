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
    else {
        fetchBookMarks(user.uid);
    }
});

const addbookmark = document.getElementById("add-bookmark");
const bookwrapper = document.getElementById("bookmark-wrapper");

function addTask () {
    location.href = "../Add/index.html";
}

addbookmark.addEventListener("click", addTask);

async function fetchBookMarks (userId) {

    bookwrapper.innerHTML = "";
    const collectionRef = db.collection("bookmarks");
    const query = collectionRef.where("userId", "==", userId);
    const qsnapshot = await query.get();

    qsnapshot.forEach((doc) => {
        const bookmarkdata = {
            ...doc.data(),
            id: doc.id,
        };
        renderCard(bookmarkdata);
    });
}

function deleteBookMark(id) {
    const collectionRef = db.collection("bookmarks");
    const docRef = collectionRef.doc(id);

    docRef.delete().then(() => {
        alert("Bookmark deleted!");
        fetchBookMarks(auth.currentUser.uid);
    })
    .catch((error) => {
        alert(error.message);
    });
}

function editBookMark (id) {
    location.href = `../EditBookMark/index.html?id=${id}`;
}

function renderCard ({id, title, url}) {
    const html = `<div class='bookmark' id=${id}>
    <h3>${title}</h3>
    <a href="${url}" target="_blank">${url}</a>
    <br/>
    <button onclick='deleteBookMark("${id}")'>Delete</button>
    <button onclick='editBookMark("${id}")'>Edit</button>
    </div>`;
    bookwrapper.innerHTML += html
}