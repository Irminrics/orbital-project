const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes//

//register and login routes
app.use("/auth", require("./routes/auth"))
app.use("/dashboard", require("./routes/dashboard"))
app.use("/projects", require("./routes/projects"))

app.listen(3001, () => {
    console.log("Server has started on port 3001");
});