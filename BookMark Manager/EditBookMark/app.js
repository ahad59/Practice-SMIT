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

const updatebookmark = document.getElementById("update");
const  title = document.getElementById("title");
const url = document.getElementById("url");

const id = location.href.split("?")[1].split("=")[1];
console.log("id = ", id);

function updateBook () {
    const title1 = title.value;
    const url1 = url.value;

    const collectionRef = db.collection("bookmarks");
    const docRef = collectionRef.doc(id);
    docRef.update({
        title: title1,
        url: url1,
    })
    .then(() => {
        alert("BookMark Updated!");
        location.href  = "../myBookMarks/index.html";
    })
    .catch((error) => {
        alert(error.message);
    });
}
updatebookmark.addEventListener("click", updateBook);

async function getBookMark () {

    const collectionRef = db.collection("bookmarks");
    const docRef = collectionRef.doc(id);

    const doc = await docRef.get();
    const result = doc.data();

    title.value = result.title;
    url.value = result.url;
}
getBookMark();