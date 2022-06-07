const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(id) {
    return jwt.sign({user: id}, process.env.jwtSecret, { expiresIn: "1h" });
}

module.exports = jwtGenerator;