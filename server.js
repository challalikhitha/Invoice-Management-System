const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = new sqlite3.Database("./database.db");

db.run(`CREATE TABLE IF NOT EXISTS invoices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  invoiceNo TEXT NOT NULL,
  client TEXT NOT NULL,
  date TEXT,
  amount REAL,
  status TEXT
)`);

app.post("/invoices", (req, res) => {
  const { invoiceNo, client, date, amount, status } = req.body;
  db.run(
    "INSERT INTO invoices (invoiceNo, client, date, amount, status) VALUES (?, ?, ?, ?, ?)",
    [invoiceNo, client, date, amount, status],
    () => res.send("Invoice added")
  );
});

app.get("/invoices", (req, res) => {
  db.all("SELECT * FROM invoices", [], (err, rows) => res.json(rows));
});

app.put("/invoices/:id", (req, res) => {
  const { client, amount, status } = req.body;
  db.run(
    "UPDATE invoices SET client=?, amount=?, status=? WHERE id=?",
    [client, amount, status, req.params.id],
    () => res.send("Updated")
  );
});

app.delete("/invoices/:id", (req, res) => {
  db.run("DELETE FROM invoices WHERE id=?", [req.params.id], () =>
    res.send("Deleted")
  );
});

app.listen(5000, () => console.log("Backend running on port 5000"));
