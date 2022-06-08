const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(id) {
    console.log(process.env.jwtSecret);
    return jwt.sign({ user: id }, process.env.JWT_SECRET, { expiresIn: "1h" });
}

module.exports = jwtGenerator;