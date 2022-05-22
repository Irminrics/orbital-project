const router = require("express").Router();
const authorization = require("../middleware/authorization");
const pool = require("../db");

router.get("/", authorization, async (req, res) => {
  try {
    const user = await pool.query(
        "SELECT * FROM users WHERE id = $1",
        [req.user] 
    ); 

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/users", async (req, res) => {
  try {
    const user = await pool.query(
        "SELECT * FROM users"
    ); 

    res.json(user.rowCount);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/projects", async (req, res) => {
  try {
    const project = await pool.query(
        "SELECT * FROM projects"
    ); 

    res.json(project.rowCount);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;