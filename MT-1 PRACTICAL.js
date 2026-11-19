const express = require("express");
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Initial Data
let leaves = [
    {
        id: 701,
        employeeName: "Ananya Singh",
        employeeCode: "EMP101",
        leaveType: "Casual",
        days: 2,
        status: "Pending"
    },
    {
        id: 702,
        employeeName: "Rahul Verma",
        employeeCode: "EMP102",
        leaveType: "Sick",
        days: 1,
        status: "Approved"
    },
    {
        id: 703,
        employeeName: "Simran Kaur",
        employeeCode: "EMP103",
        leaveType: "Earned",
        days: 3,
        status: "Rejected"
    }
];

// Validation Function
function validate(data) {
    return (
        typeof data.employeeName === "string" &&
        data.employeeName.trim() !== "" &&
        typeof data.employeeCode === "string" &&
        data.employeeCode.trim() !== "" &&
        ["Casual", "Sick", "Earned"].includes(data.leaveType) &&
        Number.isInteger(data.days) &&
        data.days > 0 &&
        ["Pending", "Approved", "Rejected"].includes(data.status)
    );
}

// GET Route - Get All Leaves
app.get("/api/leaves", (req, res) => {
    res.status(200).json(leaves);
});

// POST Route - Add New Leave
app.post("/api/leaves", (req, res) => {
    const data = req.body;

    if (!validate(data)) {
        return res.status(400).json({
            message: "Invalid data"
        });
    }

    const newLeave = {
        id: Math.max(...leaves.map(l => l.id), 700) + 1,
        ...data
    };

    leaves.push(newLeave);

    res.status(201).json(newLeave);
});

// GET Route - Pending Leaves
app.get("/api/leaves/pending", (req, res) => {
    const result = leaves.filter(
        l => l.status === "Pending"
    );

    res.status(200).json(result);
});

// GET Route - Filter By Status
app.get("/api/leaves/filter", (req, res) => {
    const status = req.query.status;

    if (!status) {
        return res.status(400).json({
            message: "Status is required"
        });
    }

    const result = leaves.filter(
        l => l.status.toLowerCase() === status.toLowerCase()
    );

    res.status(200).json(result);
});

// GET Route - Get Leave By ID
app.get("/api/leaves/:id", (req, res) => {
    const id = Number(req.params.id);

    const leave = leaves.find(l => l.id === id);

    if (!leave) {
        return res.status(404).json({
            message: "Leave not found"
        });
    }

    res.status(200).json(leave);
});

// PUT Route - Update Leave
app.put("/api/leaves/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = leaves.findIndex(l => l.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Leave not found"
        });
    }

    if (!validate(req.body)) {
        return res.status(400).json({
            message: "Invalid data"
        });
    }

    leaves[index] = {
        id: id,
        ...req.body
    };

    res.status(200).json(leaves[index]);
});

// DELETE Route - Delete Leave
app.delete("/api/leaves/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = leaves.findIndex(l => l.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Leave not found"
        });
    }

    leaves.splice(index, 1);

    res.status(200).json({
        message: "Leave deleted successfully"
    });
});

// Start Server
app.listen(4000, () => {
    console.log("Server running on port 4000");
});
