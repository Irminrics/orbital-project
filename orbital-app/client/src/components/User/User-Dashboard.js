import { useState, useEffect } from 'react';

const UserDashboard = () => {
    const [name, setName] = useState();

    async function getName() {
        try {
            const response = await fetch("/users/me", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();

            setName(parseRes.firstname + " " + parseRes.lastname);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getName();
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
                                        <h3>Hello, {name}!</h3>
                                        <p className="animated fadeInDown" style={{ lineHeight: '.4' }}>
                                            Welcome back to Skylab
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <i className="fa fa-pie-chart mr-3" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default UserDashboard