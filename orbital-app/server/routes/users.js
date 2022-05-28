const router = require("express").Router();
const authorization = require("../middleware/authorization");
const pool = require("../db");

router.get("/me", authorization, async (req, res) => {
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

router.get("/", async (req, res) => {
  try {
    const user = await pool.query(
        "SELECT * FROM users"
    ); 

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.delete("/del/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [id])

    res.json("User is successfully deleted!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;