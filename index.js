const express = require("express");
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js");
const db = require("./database")

app.use(express.json());
  
app.use("/api/", usersRouter);

app.get('/', (req, res) => {
  res.send('Welcome to our simple REST API!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const sqlite3 = require("sqlite3").verbose()
