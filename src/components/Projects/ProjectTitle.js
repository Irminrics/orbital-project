const ProjectTitle = ({level}) => {
    return (
        <>
            <div className="project-title-container">
                <div className="project-title">
                    <p className="project-title-orbital my-0">ORBITAL'S</p>
                    <p className="project-title-level my-0">{level}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectTitle