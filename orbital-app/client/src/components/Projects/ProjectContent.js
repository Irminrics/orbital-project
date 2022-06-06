import artemis from "../../images/artemis.png"
import apollo11 from "../../images/apollo11.png"
import gemini from "../../images/gemini.png"
import vostok from "../../images/vostok.png"

const ProjectContent = ({ teamName, teamID, teamMember1, teamMember2, teamAdvisor, achievement }) => {
    if (achievement === "artemis") {
        return (
            <>
                <div className="project float-left m-5">
                    <div className="card project-card project-content my-4"
                        style={{ backgroundImage: `url(${artemis})`, backgroundRepeat: `no-repeat`, backgroundSize: `200px`, backgroundPosition: `center` }}>
                        <div className="project-overlay">
                            <div className="white-text">Team ID: {teamID}</div>
                            <br />
                            <div className="white-text">Team Members: <br />
                                {teamMember1} <br />
                                {teamMember2} <br />
                            </div>
                            <br />
                            <div className="white-text">Advised By: <br />
                                {teamAdvisor}</div>
                        </div>
                    </div>
                    <h4 className="font-weight-bold text-primary">{teamName}</h4>
                </div>

            </>
        )
    } else if (achievement === "gemini") {
        return (
            <>
                <div className="project float-left m-5">
                    <div className="card project-card project-content my-4 project-icon"
                        style={{ backgroundImage: `url(${gemini})`, backgroundRepeat: `no-repeat`, backgroundSize: `200px`, backgroundPosition: `center` }}>
                        <div className="project-overlay">
                            <div className="white-text">Team ID: {teamID}</div>
                            <br />
                            <div className="white-text">Team Members: <br />
                                {teamMember1} <br />
                                {teamMember2} <br />
                            </div>
                            <br />
                            <div className="white-text">Advised By: <br />
                                {teamAdvisor}</div>
                        </div>
                    </div>
                    <h4 className="font-weight-bold text-primary">{teamName}</h4>
                </div>

            </>
        )
    } else if (achievement === "apollo11") {
        return (
            <>
                <div className="project float-left m-5">
                    <div className="card project-card project-content my-4 project-icon"
                        style={{ backgroundImage: `url(${apollo11})`, backgroundRepeat: `no-repeat`, backgroundSize: `200px`, backgroundPosition: `center` }}>
                        <div className="project-overlay">
                            <div className="white-text">Team ID: {teamID}</div>
                            <br />
                            <div className="white-text">Team Members: <br />
                                {teamMember1} <br />
                                {teamMember2} <br />
                            </div>
                            <br />
                            <div className="white-text">Advised By: <br />
                                {teamAdvisor}</div>
                        </div>
                    </div>
                    <h4 className="font-weight-bold text-primary">{teamName}</h4>
                </div>

            </>
        )
    } else {
        return (
            <>
                <div className="project float-left m-5">
                    <div className="card project-card project-content my-4 project-icon"
                        style={{ backgroundImage: `url(${vostok})`, backgroundRepeat: `no-repeat`, backgroundSize: `200px`, backgroundPosition: `center` }}>
                        <div className="project-overlay">
                            <div className="white-text">Team ID: {teamID}</div>
                            <br />
                            <div className="white-text">Team Members: <br />
                                {teamMember1} <br />
                                {teamMember2} <br />
                            </div>
                            <br />
                            <div className="white-text">Advised By: <br />
                                {teamAdvisor}</div>
                        </div>
                    </div>
                    <h4 className="font-weight-bold text-primary">{teamName}</h4>
                </div>

            </>
        )
    }
}


export default ProjectContent