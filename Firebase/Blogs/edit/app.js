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

const title = document.getElementById("title");
const description = document.getElementById("description");

const id = location.href.split("?")[1].split("=")[1];
console.log(id ,"===id");

const updateButton = document.getElementById("update");

function updateBtnClickHandler() {

  const title1 = title.value;
  const description1 = description.value;

  const collectionRef = db.collection("blog");
  const docRef = collectionRef.doc(id);
  docRef.update({
    title: title1, 
    description: description1, 
  })
  .then(() => {
    alert("Blog has been updated successfully.");
    location.href = `/Firebase/Blogs/myBlogs/index.html`
  })
  .catch((error) => {
    console.log("Error", error);
  });
}

updateButton.addEventListener("click", updateBtnClickHandler);

async function getBlog() {
  const collectionRef = db.collection("blog");
  const docRef = collectionRef.doc(id);

  const doc = await docRef.get();
  const result = doc.data();

  console.log(result, "===result");

  title.value = result.title;
  description.value = result.description;
}

getBlog();