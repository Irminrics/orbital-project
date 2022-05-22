import { useState, useEffect } from 'react';

const AdminDashBoard = () => {
    const [users, setUsers] = useState(0);
    const [projects, setProjects] = useState(0);

    useEffect(() => {
        getUserCount();
        getProjectCount();
    }, []);

    async function getUserCount() {
        try {
            const response = await fetch("http://localhost:3001/dashboard/users", {
                method: "GET",
            });

            const parseRes = await response.json();

            setUsers(parseRes);

        } catch (err) {
            console.error(err.message);
        }
    }

    async function getProjectCount() {
        try {
            const response = await fetch("http://localhost:3001/dashboard/projects", {
                method: "GET",
            });

            const parseRes = await response.json();

            setProjects(parseRes);

        } catch (err) {
            console.error(err.message);
        }
    }


    return (
        <>
            <div className="adminDashboard">
                <main className="pt-5 mx-lg-5">
                    <div className="container-xxl mt-5">
                        <div className="card wow fadeIn animated blue white-text mb-3" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            {/*Card content*/}
                            <div className="card-body d-sm-flex justify-content-between">
                                <div className="panel box-shadow-none content-header">
                                    <div className="panel-body">
                                        <div className="col-md-12">
                                            <h3 className="animated fadeInLeft">My Dashboard</h3>
                                            <p className="animated fadeInDown" style={{ lineHeight: '.4' }}>
                                                Welcome To Orbital's Admin Dashboard.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <i className="fa fa-pie-chart mr-3" />
                                </div>
                            </div>
                        </div>
                        <div className="row wow fadeIn" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            {/*Grid column*/}
                            <div className="col-md-4 mb-4">
                                {/*Card*/}
                                <div className="card">
                                    {/*Card content*/}
                                    <div className="card-body"><div className="chartjs-size-monitor" style={{ position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div className="chartjs-size-monitor-expand" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div style={{ position: 'absolute', width: '1000000px', height: '1000000px', left: 0, top: 0 }} /></div><div className="chartjs-size-monitor-shrink" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div style={{ position: 'absolute', width: '200%', height: '200%', left: 0, top: 0 }} /></div></div>
                                        <div className="panel box-v1">
                                            <div className="panel-heading bg-white border-none">
                                                <div className="col-md-6 col-sm-6 col-xs-6 text-left padding-0">
                                                    <h4 className="text-left blue-text">Users</h4>
                                                </div>
                                                <div className="col-md-12 col-sm-6 col-xs-6 text-center">
                                                    <span className="fa fa-user" style={{ fontSize: '30px' }} />
                                                </div>
                                            </div>
                                            <div className="panel-body text-center">
                                                <label id="usercount" ><h1>{users}</h1></label>
                                                <p>Users Active</p>
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*/.Card*/}
                                &nbsp;
                                {/*Card*/}
                                <div className="card">
                                    {/*Card content*/}
                                    <div className="card-body"><div className="chartjs-size-monitor" style={{ position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div className="chartjs-size-monitor-expand" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div style={{ position: 'absolute', width: '1000000px', height: '1000000px', left: 0, top: 0 }} /></div><div className="chartjs-size-monitor-shrink" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div style={{ position: 'absolute', width: '200%', height: '200%', left: 0, top: 0 }} /></div></div>
                                        <div className="panel box-v1">
                                            <div className="panel-heading bg-white border-none">
                                                <div className="col-md-6 col-sm-6 col-xs-6 text-left padding-0">
                                                    <h4 className="text-left blue-text">Projects</h4>
                                                </div>
                                                <div className="col-md-12 col-sm-6 col-xs-6 text-center">
                                                    <span className="fa fa-calendar" style={{ fontSize: '30px' }} />
                                                </div>
                                            </div>
                                            <div className="panel-body text-center">
                                                <label id="projectcount" ><h1>{projects}</h1></label>
                                                <p>Projects Created</p>
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*/.Card*/}
                            </div>
                            {/*Grid column*/}
                            <div className="col-md-8 mb-4">
                                {/*Card*/}
                                <div className="card">
                                    {/*Card content*/}
                                    <div className="card-body" style={{ marginTop: '14px', marginBottom: '14px', height: "510px" }}>
                                        <div className="col-md-6 col-sm-6 col-xs-6 text-left padding-0">
                                            <h4 className="text-left blue-text">Project Distribution</h4>
                                        </div>
                                        <canvas id="radarChart" />
                                    </div>
                                </div>
                                {/*/.Card*/}
                            </div>
                            {/*Grid column*/}
                        </div>
                    </div></main>
            </div>
        </>
    )
}

export default AdminDashBoard