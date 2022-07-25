import { useState, useEffect } from 'react';
import LoadingSpinner from '../LoadingSpinner'

const UserProfile = () => {
    const [team, setTeam] = useState([]);
    const [poster, setPoster] = useState();
    const [video, setVideo] = useState();
    const [readme, setREADME] = useState();
    const [projectLog, setProjectLog] = useState();
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

            parseRes.teammember1 = await getMemberName(parseRes.teammember1)
            parseRes.teammember2 = await getMemberName(parseRes.teammember2)

            setTeam(parseRes);
            setHasTeam(true);
            setLoading(false);
            getLatestSubmission(parseRes.id);
        } catch (err) {
            setLoading(false);
            console.error(err.message);
        }
    }

    async function getLatestSubmission(project_id) {
        try {
            const response = await fetch(`/submissions/${project_id}/${3}`);
            const parseRes = await response.json();

            if (parseRes.rowCount === 0) {
                try {
                    const response = await fetch(`/submissions/${project_id}/${2}`);
                    const parseRes = await response.json();

                    if (parseRes.rowCount === 0) {
                        try {
                            const response = await fetch(`/submissions/${project_id}/${1}`);
                            const parseRes = await response.json();

                            if (parseRes.rowCount === 0) {
                                setPoster()
                                setVideo()
                                setREADME()
                                setProjectLog()
                                return false;
                            } else {
                                setPoster(parseRes.rows[0].poster)
                                setVideo(parseRes.rows[0].video)
                                setREADME(parseRes.rows[0].readme)
                                setProjectLog(parseRes.rows[0].project_log)
                                return true;
                            }

                        } catch (err) {
                            console.error(err.message);
                        }
                    } else {
                        setPoster(parseRes.rows[0].poster)
                        setVideo(parseRes.rows[0].video)
                        setREADME(parseRes.rows[0].readme)
                        setProjectLog(parseRes.rows[0].project_log)
                        return true;
                    }

                } catch (err) {
                    console.error(err.message);
                }
            } else {
                setPoster(parseRes.rows[0].poster)
                setVideo(parseRes.rows[0].video)
                setREADME(parseRes.rows[0].readme)
                setProjectLog(parseRes.rows[0].project_log)
                return true;
            }

        } catch (err) {
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
                        
                    </main>
                </>
        }
        </>
    )
}

export default UserProfile