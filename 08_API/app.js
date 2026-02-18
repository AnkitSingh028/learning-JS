// ===============================
// API IN JAVASCRIPT — CODE NOTES
// ===============================



// 1️⃣ BASIC GET REQUEST (fetch)

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));



// 2️⃣ USING ASYNC / AWAIT (RECOMMENDED)

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getPosts();



// 3️⃣ GET SINGLE ITEM

async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}



// 4️⃣ POST REQUEST (SEND DATA)

async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Hello",
      body: "API Learning",
      userId: 1
    })
  });

  const data = await response.json();
  console.log(data);
}



// 5️⃣ PUT REQUEST (UPDATE DATA)

async function updatePost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Updated Title",
      body: "Updated Body",
      userId: 1
    })
  });

  const data = await response.json();
  console.log(data);
}



// 6️⃣ DELETE REQUEST

async function deletePost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
  });

  console.log("Deleted:", response.ok);
}



// 7️⃣ CHECK RESPONSE STATUS

async function checkStatus() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  console.log(data);
}



// 8️⃣ FETCH WITH QUERY PARAMS

async function getCommentsByPost() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=1"
  );
  const data = await response.json();
  console.log(data);
}



// 9️⃣ BASIC EXPRESS API (SERVER SIDE)

const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/api/data", (req, res) => {
  const body = req.body;
  res.json({ received: body });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});



// 🔟 CONNECT FRONTEND TO YOUR EXPRESS API

fetch("http://localhost:3000/api/hello")
  .then(res => res.json())
  .then(data => console.log(data));
