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
  if (!user) {
    location.href = "/Firebase/Blogs/Signin/index.html"
  }
  fetchBlogs(user.uid);
});

const addbutton = document.getElementById("add-blog");
const blogWrapper = document.getElementById("blog-wrapper");

function addBlogClickHandler() {
  location.href = "/Firebase/Blogs/Add/index.html";
}

addbutton.addEventListener("click", addBlogClickHandler);

async function fetchBlogs(userId) {
  blogWrapper.innerHTML = "";
  const collectionRef = db.collection("blog");
  const query = collectionRef.where("userId", "==", userId);
  const qsnapshot = await query.get();
  qsnapshot.forEach((doc) => {
    const blogData = {
      ...doc.data(),
      id: doc.id,
    };
    renderCard(blogData);
  });
}

function deleteBlogHandler (id) {
  const collectionRef = db.collection("blog");
  const docRef = collectionRef.doc(id);
  docRef
  .delete()
  .then(() => {
    alert("This Blog has been deleted.");
    fetchBlogs();
  })
  .catch ((error) => {
    console.log("Error", error);
  });
}

function editBlogHandler(id) {
  location.href = `/Firebase/Blogs/edit/index.html?id=${id}`
}

function renderCard({ id, description, title }) {
  const html = `<div class='blog' id=${id}>
      <h2>${title}</h2>
      <p>${description}</p>
      <button onclick='deleteBlogHandler("${id}")'>Delete</button>
      <button onclick='editBlogHandler("${id}")'>Edit</button>
      </div>`;

  blogWrapper.innerHTML += html;
}
