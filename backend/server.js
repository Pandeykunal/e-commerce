const app = require("./app");
const connect = require("./db");

app.listen(5000, () => {
  console.log("✅ Server running at http://localhost:5000");
  connect();
});
