const router = require("express").Router()
const pool = require("../db")

//create a project
router.post("/create", async (req, res) => {
    try {
        const { teamName, teamMember1, teamMember2, teamAdvisor, achievement } = req.body;
        const newProject = await pool.query("INSERT into projects (teamName, teamMember1, teamMember2, teamAdvisor, achievement) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [teamName, teamMember1, teamMember2, teamAdvisor, achievement]
        );

    } catch (err) {
        console.error(err.message);
    }
});

//get all projects
router.get("/", async (req, res) => {
    try {
        const projects = await pool.query("SELECT * FROM projects")
        res.json(projects);
    } catch (err) {
        console.error(err.message);
    }
});

router.delete("/del/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM projects WHERE id = $1", [id])

        res.json("Project is successfully deleted!");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

//get all projects by level
router.get("/:achievement", async (req, res) => {
    try {
        const { achievement } = req.params;
        const project = await pool.query("SELECT * FROM projects WHERE achievement = $1", [achievement])

        res.json(project.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//update a project
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { teamName, teamMember1, teamMember2, teamAdvisor } = req.body;
        const updateProject = await pool.query("UPDATE projects SET teamName = $1, teamMember1 = $2, teamMember2 = $3, teamAdvisor = $4 WHERE id = $5",
            [teamName, teamMember1, teamMember2, teamAdvisor, id]
        );

        res.json("Project was updated!");
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = router;