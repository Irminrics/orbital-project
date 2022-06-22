import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const UserDashboard = () => {
    const [team, setTeam] = useState([]);
    const [userid, setUserId] = useState([]);
    const [poster, setPoster] = useState();
    const [isValidPoster, setValidPoster] = useState(false);

    async function getUserId() {
        try {
            const response = await fetch("/users/me", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            setUserId(parseRes.userid);
            getTeam(parseRes.userid)
        } catch (err) {
            console.error(err.message);
        }
    }

    async function getTeam(userid) {
        try {

            const response = await fetch(`/projects/userid/${userid}`);
            const parseRes = await response.json();

            setTeam(parseRes);
        } catch (err) {
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
            console.log(poster);
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

    const retrievePoster = async () => {
        try {
            const response = await fetch(`/projects/id/${team.id}`);
            const jsonData = await response.json();

            setPoster(jsonData.poster);
            console.log(jsonData.poster);
        } catch (err) {
            // console.error(err.message);
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


    useEffect(() => {
        getUserId();
    }, []);


    return (
        <>
            <div className="adminDashboard">
                <main className="pt-5 mx-lg-5 my-5">
                    <div className="card wow fadeIn animated blue white-text mb-3" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                        {/*Card content*/}
                        <div className="card-body d-sm-flex justify-content-between">
                            <div className="panel box-shadow-none content-header">
                                <div className="panel-body">
                                    <div className="col-md-12">
                                        <h3>Hello!</h3>
                                        <p className="animated fadeInDown" style={{ lineHeight: '.4' }}>
                                            Welcome back to Skylab
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    Team ID: {team.id} <br />
                    Team Name: {team.teamname}  <br />
                    Team Member 1: {team.teammember1}  <br />
                    Team Member 2: {team.teammember2}  <br />
                    Team Advisor: {team.advisor}  <br />
                    Team Achievement: {team.achievement}  <br />

                    <br />

                    <form>
                        <input type="file" className="input-file" name="imgUpload" accept='image/*' onChange={e => getBase64(e)} />
                        <label className="control-label float-left mt-2">Video Link</label>
                        <input
                            type="text"
                            className="form-control"
                        // defaultValue={firstName}
                        // onChange={e => setFirstName(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={e => updatePoster(e)}
                        >
                            Submit
                        </button>

                        <button
                            type="button"
                            onClick={e => retrievePoster(e)}
                        >
                            Retrieve
                        </button>
                    </form>


                    <img src={poster} key={poster} />
                </main>
            </div>
        </>
    )
}

export default UserDashboard