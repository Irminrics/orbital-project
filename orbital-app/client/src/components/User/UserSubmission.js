import { useState, useEffect } from 'react';

const UserSubmission = () => {
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