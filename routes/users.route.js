const { Router } = require("express");
const pool = require("../db");
const router = Router();
const { v4 } = require("uuid");
const { checkInput } = require("../middleware/input");

// GET all users
router.get("/", async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM users");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// POST a user
router.post("/", checkInput, async (req, res, next) => {
  checkInput(req.body);

  try {
    const results = await pool.query(
      "INSERT INTO users (id, name, email) VALUES ($1, $2, $3) RETURNING *",
      [v4(), req.body.name, req.body.email]
    );
    res.status(201).json(results.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
