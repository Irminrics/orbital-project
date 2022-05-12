import '../css/bootstrap/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../css/homepage.css';

import Navigation from "../components/Header/Navigation";
import ProjectTitle from "../components/Projects/ProjectTitle";
import ProjectContent from "../components/Projects/ProjectContent";
import Footer from "../components/Footer/Footer";

const ProjectsPage = () => {

    return (
        <>
            <Navigation />
            <ProjectTitle level={"Artemis"}/>
            <div id="projects-div">
                <div className='container-xxxl'>
                    <ProjectContent teamName={"Team Orbital"} teamID="12345" teamMembers={"James Ng Wei Jie, Jessie Tan Jia Yi"} teamAdvisor={"Rayner"}/>
                    <ProjectContent teamName={"Bandersnatch"} teamID="12345" teamMembers={"James Ng Wei Jie, Jessie Tan Jia Yi"} teamAdvisor={"Rayner"}/>
                    <ProjectContent teamName={"Party Emoji"} teamID="12345" teamMembers={"James Ng Wei Jie, Jessie Tan Jia Yi"} teamAdvisor={"Rayner"}/>
                    <ProjectContent teamName={"Easylink"} teamID="12345" teamMembers={"James Ng Wei Jie, Jessie Tan Jia Yi"} teamAdvisor={"Rayner"}/>
                    <ProjectContent teamName={"Focat"} teamID="12345" teamMembers={"James Ng Wei Jie, Jessie Tan Jia Yi"} teamAdvisor={"Rayner"}/>
                    <ProjectContent teamName={"Pilot"} teamID="12345" teamMembers={"James Ng Wei Jie, Jessie Tan Jia Yi"} teamAdvisor={"Rayner"}/>
                    <ProjectContent teamName={"Whistle"} teamID="12345" teamMembers={"James Ng Wei Jie, Jessie Tan Jia Yi"} teamAdvisor={"Rayner"}/>
                    <ProjectContent teamName={"Project Flow"} teamID="12345" teamMembers={"James Ng Wei Jie, Jessie Tan Jia Yi"} teamAdvisor={"Rayner"}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProjectsPage