const ProjectContent = ({ teamName, teamID, teamMembers, teamAdvisor}) => {
    return (
        <>
            <div className="project float-left m-5">
                <div className="card project-card project-content my-4 project-icon">
                    <div className="project-overlay">
                        <div className="white-text">Team ID: {teamID}</div>
                        <br />
                        <div className="white-text">Team Members: {teamMembers}</div>
                        <br />
                        <div className="white-text">Advisor: {teamAdvisor}</div>
                    </div>
                </div>
                <h4 className="font-weight-bold text-primary">{teamName}</h4>
            </div>

        </>
    )
}

export default ProjectContent