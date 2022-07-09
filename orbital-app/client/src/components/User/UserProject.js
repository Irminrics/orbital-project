import { useState, useEffect } from 'react';
import LoadingSpinner from '../LoadingSpinner'

const UserDashboard = () => {
    const [team, setTeam] = useState([]);
    const [poster, setPoster] = useState();
    const [video, setVideo] = useState();
    const [hasTeam, setHasTeam] = useState(false);
    const [isLoading, setLoading] = useState(true);


    async function getUserId() {
        try {
            const response = await fetch("/users/me", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            getTeam(parseRes.userid);
        } catch (err) {
            console.error(err.message);
        }
    }

    async function getTeam(userid) {
        try {

            const response = await fetch(`/projects/userid/${userid}`);
            const parseRes = await response.json();

            console.log(parseRes);

            parseRes.teammember1 = await getMemberName(parseRes.teammember1)
            parseRes.teammember2 = await getMemberName(parseRes.teammember2)

            setTeam(parseRes);
            setVideo(parseRes.video);
            setPoster(parseRes.poster);
            setHasTeam(true);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.error(err.message);
        }
    }

    const getMemberName = async (userid) => {
        try {
            const response = await fetch(`/users/students/${userid}`);
            const jsonData = await response.json();
            return (jsonData.rows[0].firstname + " " + jsonData.rows[0].lastname);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getUserId();
    }, []);


    return (
        <> {
            isLoading ? <LoadingSpinner /> :
                <>
                    <main className="pt-5 mx-lg-5 my-5">
                        <div className="card wow fadeIn animated blue white-text mb-3" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            {/*Card content*/}
                            <div className="card-body d-sm-flex justify-content-between">
                                <div className="panel box-shadow-none content-header">
                                    <div className="panel-body">
                                        <div className="col-md-12">
                                            <h1>{hasTeam === true ? team.teamname : "Uh oh..."}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MyProjectContent team={team} isLoading={isLoading} poster={poster} video={video} hasTeam={hasTeam} />

                    </main>


                    <div
                        className="modal"
                        id={`myprojectposter`}
                    >
                        <div className="modal-dialog">
                            <img src={poster} height="698" width="500" />
                        </div>
                    </div>

                </>
        }
        </>
    )
}

const MyProjectContent = ({ team, isLoading, poster, video, hasTeam }) => {
    if (hasTeam === false) {
        return (
            <>
                <div className='emptyProject'>
                    <p>You are currently not in a project.</p>
                </div>
            </>
        )
    }
    else {
        return (
            <div className='row'>
                <div className='col-md-7'>
                    {/*Grid column*/}
                    <div className="card" style={{ height: '355px' }}>
                        <div className="card-body">
                            <div className="text-left padding-0">
                                <h4 className="text-left blue-text mb-4">Basic Information</h4>
                                <p>Project ID: {team.id} </p>
                                <p>Project Member 1: &nbsp;
                                    <button className='btn-primary rounded'>{team.teammember1}</button>
                                </p>
                                <p>Project Member 2: &nbsp;
                                    <button className='btn-primary rounded'>{team.teammember2}</button>
                                </p>
                                <p>Project Advisor: {team.teamadvisor} </p>
                                <p>Project Achievement: <MyProjectAchievement achievement={team.achievement} /> </p>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>


                <div className='col-md-5'>
                    <MyProjectPoster disabled={poster === null ? true : false} />

                    <MyProjectVideo disabled={video === null ? true : false} video={video} />

                    <MyProjectREADME disabled={true} />

                    <MyProjectLog disabled={true} />
                </div>
            </div>
        )
    }
}

const MyProjectPoster = ({ disabled }) => {
    if (disabled) {
        return (
            <a className="card grey white-text mb-3" data-bs-toggle="modal"
                data-bs-target={`#myprojectposter`} style={{ pointerEvents: "none" }}>
                {/*Card content*/}
                <div className="card-body d-sm-flex justify-content-between">
                    <div className="panel box-shadow-none content-header">
                        <div className="panel-body">
                            <div className="col-md-12">
                                <h4>No poster updated</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </a>)
    } else {
        return (
            <a className="card blue white-text mb-3" data-bs-toggle="modal"
                data-bs-target={`#myprojectposter`}>
                {/*Card content*/}
                <div className="card-body d-sm-flex justify-content-between">
                    <div className="panel box-shadow-none content-header">
                        <div className="panel-body">
                            <div className="col-md-12">
                                <h4>Click for poster pop up</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </a>)
    }
}

const MyProjectVideo = ({ disabled, video }) => {
    if (disabled) {
        return (
            <a className="card grey white-text mb-3" style={{ pointerEvents: "none" }} >
                {/*Card content*/}
                <div className="card-body d-sm-flex justify-content-between">
                    <div className="panel box-shadow-none content-header">
                        <div className="panel-body">
                            <div className="col-md-12 white-text">
                                <h4>No video updated</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </a>)
    } else {
        return (
            <a className="card blue white-text mb-3" href={video} style={{ textDecoration: "none" }}>
                {/*Card content*/}
                <div className="card-body d-sm-flex justify-content-between">
                    <div className="panel box-shadow-none content-header">
                        <div className="panel-body">
                            <div className="col-md-12 white-text">
                                <h4>Click for video pop up</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </a>)
    }
}


const MyProjectREADME = ({ disabled }) => {
    if (disabled) {
        return (
            <a className="card grey white-text mb-3" style={{ pointerEvents: "none" }} >
                {/*Card content*/}
                <div className="card-body d-sm-flex justify-content-between">
                    <div className="panel box-shadow-none content-header">
                        <div className="panel-body">
                            <div className="col-md-12">
                                <h4>No README updated</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </a>)
    } else {
        return (
            <a className="card blue white-text mb-3">
                {/*Card content*/}
                <div className="card-body d-sm-flex justify-content-between">
                    <div className="panel box-shadow-none content-header">
                        <div className="panel-body">
                            <div className="col-md-12">
                                <h4>Click to open README on new page</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </a>)
    }
}

const MyProjectLog = ({ disabled }) => {
    if (disabled) {
        return (
            <a className="card grey white-text mb-3" style={{ pointerEvents: "none" }} >
                {/*Card content*/}
                <div className="card-body d-sm-flex justify-content-between">
                    <div className="panel box-shadow-none content-header">
                        <div className="panel-body">
                            <div className="col-md-12">
                                <h4>No project log updated</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </a>)
    } else {
        return (
            <a className="card blue white-text mb-3">
                {/*Card content*/}
                <div className="card-body d-sm-flex justify-content-between">
                    <div className="panel box-shadow-none content-header">
                        <div className="panel-body">
                            <div className="col-md-12">
                                <h4>Click to open project log on new page</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </a>)
    }
}

const MyProjectAchievement = ({ achievement }) => {
    if (achievement === "artemis") {
        return "Artemis";

    } else if (achievement === "apollo11") {
        return "Apollo 11";

    } else if (achievement === "gemini") {
        return "Gemini";

    } else {
        return "Vostok";
    }
}

export default UserDashboard