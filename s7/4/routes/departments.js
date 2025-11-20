
const express = require("express");
const { departments } = require("../db");
const router = express.Router();

router.get("/departments", (req, res) => {
    res.status(200).json(departments);
});

router.get("/departments/:id", (req, res) => {
    const department = departments.find(
        (department) => department.id === Number(req.params.id)
    );
    if (department) {
        res.status(200).json(department);
    } else {
        res.status(404).json({ error: "Entity not found" });
    }
});

module.exports = router;