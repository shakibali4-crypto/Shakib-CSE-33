const express = require("express");
const app = express();

// Middleware to read JSON data
app.use(express.json());

// GET Route
app.get("/students", (req, res) => {
    res.send("Get all students");
});

// POST Route
app.post("/students", (req, res) => {
    res.send("New student added");
});

// PUT Route
app.put("/students/:id", (req, res) => {
    res.send("Student updated with ID: " + req.params.id);
});

// DELETE Route
app.delete("/students/:id", (req, res) => {
    res.send("Student deleted with ID: " + req.params.id);
});

// Start Server
app.listen(4000, () => {
    console.log("Server running on port 4000");
});