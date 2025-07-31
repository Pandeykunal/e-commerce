const app = require("./src/app");
const connect = require("./src/db/db");

// 👇 Add this line before app.listen
app.get("/", (req, res) => {
  res.send("✅ Backend is live and running!");
});

app.listen(5000, () => {
  console.log("✅ Server running at http://localhost:5000");
  connect();
});
