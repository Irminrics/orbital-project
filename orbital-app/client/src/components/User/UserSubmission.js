import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const UserSubmission = () => {
    const [team, setTeam] = useState([]);
    const [userid, setUserId] = useState([]);
    const [poster, setPoster] = useState();
    const [video, setVideo] = useState();
    const [hasTeam, setHasTeam] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [isValidPoster, setValidPoster] = useState(false);


    async function getUserId() {
        try {
            const response = await fetch("/users/me", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            setUserId(parseRes.userid);
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

    const updatePoster = async e => {
        e.preventDefault();
        if (isValidPoster) {
            try {
                const body = { poster };
                const response = await fetch(
                    `/projects/poster/${userid}`,
                    {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body)
                    }
                );

                const parseRes = await response.json();

                toast.success('Poster updated!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                });


            } catch (err) {
                console.error(err.message);
                return false;
            }
        } else {
            if (poster !== undefined) {
                toast.error("Ensure image size is within 860px x 1200px", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            } else {
                toast.error("Please upload an image", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            }
        }
    };

    const updateVideo = async e => {
        e.preventDefault();
        if (validSite(video)) {
            try {
                const body = { video };
                const response = await fetch(
                    `/projects/video/${userid}`,
                    {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body)
                    }
                );

                const parseRes = await response.json();

                toast.success('Video link updated!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                });


            } catch (err) {
                console.error(err.message);
                return false;
            }
        } else {
            if (video !== undefined) {
                toast.error("Ensure video link is valid and starts with http", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            } else {
                toast.error("Please enter your video link", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            }
        }
    };

    function getBase64(e) {
        var file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function (e) {

            //Initiate the JavaScript Image object.
            var image = new Image();

            //Set the Base64 string return from FileReader as source.
            image.src = e.target.result;

            //Validate the File Height and Width.
            image.onload = function (e) {
                var height = this.height;
                var width = this.width;
                if (height > 1200 || width > 860) {
                    toast.error("Ensure image size is within 860px x 1200px", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                    setValidPoster(false);
                    return;
                }
                setPoster(reader.result);
                setValidPoster(true);
                return;
            };
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        }
    };

    function validSite(site) {
        var siteRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
        return siteRegex.test(site);
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
        <>
            <main className="pt-5 mx-lg-5 my-5">
                <div className='row'>
                    <div className='col-md-4'>
                        <Milestone1 disabled={false} />
                    </div>

                    <div className='col-md-4'>
                        <Milestone2 disabled={true} />
                    </div>


                    <div className='col-md-4'>
                        <Milestone3 disabled={true} />
                    </div>
                </div>



                <div className="card">
                    <div className="card-body">
                        {/* <img src={poster} key={poster} height="360" width="258" /> */}
                        <br />

                        <br />
                        <br />

                        <input type="file" className="input-file" name="imgUpload" accept='image/*' onChange={e => getBase64(e)} />
                        <button
                            type="button"
                            onClick={e => updatePoster(e)}
                        >
                            Submit Poster
                        </button>
                        <form>
                            <label className="control-label float-left mt-2">Video Link</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={team.video}
                                onChange={e => setVideo(e.target.value)}
                            />


                            <button
                                type="button"
                                onClick={e => updateVideo(e)}
                            >
                                Submit Video
                            </button>



                            <br />
                            <br />


                            <label className="control-label float-left mt-2">README Link</label>
                            <input
                                type="text"
                                className="form-control"
                            />


                            <button
                                type="button"
                            >
                                Submit README
                            </button>


                            <br />
                            <br />



                            <label className="control-label float-left mt-2">Project Log Link</label>
                            <input
                                type="text"
                                className="form-control"
                            />


                            <button
                                type="button"
                            >
                                Submit Project Log
                            </button>


                        </form>

                    </div>
                </div>




            </main>
        </>
    )
}


const Milestone1 = ({ disabled }) => {
    if (disabled) {
        return (
            <a className="card grey white-text mb-3" style={{ pointerEvents: "none" }}>
                {/*Card content*/}
                <div className="card-body d-sm-flex justify-content-between">
                    <div className="panel box-shadow-none content-header">
                        <div className="panel-body">
                            <div className="col-md-12">
                                <h4>Milestone 1</h4>
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
                                <h4>Milestone 1</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </a>)
    }
}



const Milestone2 = ({ disabled }) => {
    if (disabled) {
        return (
            <a className="card grey white-text mb-3" style={{ pointerEvents: "none" }}>
                {/*Card content*/}
                <div className="card-body d-sm-flex justify-content-between">
                    <div className="panel box-shadow-none content-header">
                        <div className="panel-body">
                            <div className="col-md-12">
                                <h4>Milestone 2</h4>
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
                                <h4>Milestone 2</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </a>)
    }
}



const Milestone3 = ({ disabled }) => {
    if (disabled) {
        return (
            <a className="card grey white-text mb-3" style={{ pointerEvents: "none" }}>
                {/*Card content*/}
                <div className="card-body d-sm-flex justify-content-between">
                    <div className="panel box-shadow-none content-header">
                        <div className="panel-body">
                            <div className="col-md-12">
                                <h4>Milestone 3</h4>
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
                                <h4>Milestone 3</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </a>)
    }
}

export default UserSubmission