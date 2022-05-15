const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes//


//create a project
app.post("/projects", async (req, res) => {
    try {
        const { teamName, teamMember1, teamMember2, teamAdvisor, achievement } = req.body;
        const newProject = await pool.query("INSERT into projects (teamName, teamMember1, teamMember2, teamAdvisor, achievement) VALUES($1, $2, $3, $4, $5)",
        [teamName, teamMember1, teamMember2, teamAdvisor, achievement]
        );
    } catch (err) {
        console.error(err.message);
    }
});

//get all projects
app.get("/projects", async (req, res) => {
    try {
        const allProjects = await pool.query("SELECT * FROM projects")
        res.json(allProjects.rows);
    } catch (err) {
        console.error(err.message);
    }
});

const getProjectsById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query("SELECT * FROM projects WHERE id = $1", [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//get all projects by level
app.get("/projects/:achievement", async(req, res) => {
    try {
        const { achievement } = req.params;
        const project = await pool.query("SELECT * FROM projects WHERE achievement = $1", [achievement])

        res.json(project.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//update a project
app.put("/projects/:id", async(req, res) => {
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

//delete a project
app.delete("/projects/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteProject = await pool.query("DELETE from projects WHERE id = $1", 
        [id]
        );
        
        res.json("Project was deleted!");
    } catch (err) {
        console.error(err.message);
    }
})


app.listen(3001, () => {
    console.log("Server has started on port 3001");
});