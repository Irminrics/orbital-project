import { Fragment, useState, useEffect } from "react";
import artemis from "../../images/artemis.png"
import apollo11 from "../../images/apollo11.png"
import gemini from "../../images/gemini.png"
import vostok from "../../images/vostok.png"

const ProjectContent = ({ teamName, teamID, teamMember1, teamMember2, teamAdvisor, achievement }) => {
    const [teamMemberName1, setTeamMemberName1] = useState();
    const [teamMemberName2, setTeamMemberName2] = useState();
    
    const getMemberName = async (teamMember1, teamMember2) => {
        try {
            const responseTM1 = await fetch(`/users/students/${teamMember1}`);
            const jsonDataTM1 = await responseTM1.json();

            var teamMemberName1 = await jsonDataTM1.rows[0].firstname + " " + await jsonDataTM1.rows[0].lastname;
            setTeamMemberName1(teamMemberName1);

            const responseTM2 = await fetch(`/users/students/${teamMember2}`);
            const jsonDataTM2 = await responseTM2.json();

            var teamMemberName2 = await jsonDataTM2.rows[0].firstname + " " + await jsonDataTM2.rows[0].lastname;
            setTeamMemberName2(teamMemberName2);

        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getMemberName(teamMember1, teamMember2);
    }, []);
    
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
                                {teamMemberName1} <br />
                                {teamMemberName2} <br />
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
                                {teamMemberName1} <br />
                                {teamMemberName2} <br />
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
                                {teamMemberName1} <br />
                                {teamMemberName2} <br />
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
                                {teamMemberName1} <br />
                                {teamMemberName2} <br />
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