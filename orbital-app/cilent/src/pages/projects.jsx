import '../css/bootstrap/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../css/homepage.css';

import Navigation from "../components/Header/Navigation";
import ProjectTitle from "../components/Projects/ProjectTitle";
import ProjectContent from "../components/Projects/ProjectContent";
import Footer from "../components/Footer/Footer";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    let { achievement } = useParams();

    const getProjects = async (achievement) => {
        try {
            const response = await fetch(`http://localhost:3001/projects/${achievement}`);
            const jsonData = await response.json();

            setProjects(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getProjects(achievement);
    }, [])



    return (
        <>
            <Navigation />
            <ProjectTitle level={achievement} />
            <div id="projects-div">
                <div className='container-xxxl'>
                    {projects.map(project => (
                        <ProjectContent teamName={project.teamname} teamID={project.id} teamMember1={project.teammember1} teamMember2={project.teammember2} teamAdvisor={project.teamadvisor} achievement={project.achievement}/>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProjectsPage