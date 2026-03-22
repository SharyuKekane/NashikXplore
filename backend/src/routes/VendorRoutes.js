const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// CREATE VENDOR
router.post("/", async (req, res) => {
  try {
    const {
      name,
      owner,
      category,
      location,
      whatsapp,
      description,
      years,
      price,
      story,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO vendors
       (name, owner, category, location, whatsapp, description, years, price, story)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
       RETURNING *`,
      [name, owner, category, location, whatsapp, description, years, price, story]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET ALL VENDORS
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM vendors ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;