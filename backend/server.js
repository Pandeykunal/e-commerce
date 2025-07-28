const app = require("./src/app");
const connect = require("./src/db/db")

app.listen(5000, () => {
  console.log("✅ Server running at http://localhost:5000");
  connect();
});
