const pool = require("../db");
const router = require("express").Router()
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator")
const validation = require("../middleware/validation")
const authorization = require("../middleware/authorization")

//register
router.post("/register", validation, async (req, res) => {
    try {

        //1. Destructure the req.body (name, email, password)
        const { username, email, password } = req.body;

        //2. Check if user exist (if user exist then throw error)
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        //Status 401 = Unauthenticated and 403 = Unauthorized
        if (user.rows.length !== 0) {
            return res.status(401).send("User already existed");
        }

        //3. Bcrypt the user password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        //4. Enter the new user inside our database
        const newUser = await pool.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
            [username, email, bcryptPassword])

        //5. Generating the jwt token
        const token = jwtGenerator(newUser.rows[0].id);
        return res.json({ token });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//login
router.post("/login", validation, async (req, res) => {
    try {

        //1. Destructure the req.body (name, email, password)
        const { email, password } = req.body;

        //2. Check if user doesn't exist (If not then we throw error)
        const user = await pool.query("SELECT * FROM users where email = $1",
            [email]);

        if (user.rows.length === 0) {
            return res.status(401).json("Email or Password is incorrect.");
        }

        //3. Check if incoming password is same as the database password
        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
            return res.status(401).json("Invalid Credentials!");
        }
        const jwtToken = jwtGenerator(user.rows[0].id);
        return res.json({ jwtToken });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

router.get("/verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;