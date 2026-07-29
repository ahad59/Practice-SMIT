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

// ✅ Redirect if not logged in
auth.onAuthStateChanged((user) => {
    if (!user) {
        location.href = "/Firebase/Blogs/Signin/index.html";
    }
});

const addbutton = document.getElementById("add");

function addBlogClickHandler() {
    // ✅ Fix 1 — get user fresh at click time
    const user = auth.currentUser;

    if (!user) {
        alert("You are not logged in!");
        location.href = "/Firebase/Blogs/Signin/index.html";
        return;
    }

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    // ✅ Basic validation
    if (!title || !description) {
        alert("Please fill in both title and description!");
        return;
    }

    const collectionRef = db.collection("blog");
    collectionRef
        .add({
            title,
            description,
            userId: user.uid,
        })
        .then(() => {
            alert("New Blog Has been added successfully!");
            location.href = "/Firebase/Blogs/myBlogs/index.html";
        })
        .catch((error) => {
            console.log("Error", error);
            alert(error.message);
        });
}

addbutton.addEventListener("click", addBlogClickHandler);