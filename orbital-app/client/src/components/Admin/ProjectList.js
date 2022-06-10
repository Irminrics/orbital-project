import { Fragment, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import AddProjectList from './AddProjectList'

const ProjectList = () => {
    return (
        <Fragment>
            <main className="pt-5 mx-lg-5">
                <div className="container-xxl my-5">
                    <div className="card blue white-text mb-3">
                        {/*Card content*/}
                        <div className="card-body d-sm-flex justify-content-between">
                            <div className="panel box-shadow-none content-header">
                                <div className="panel-body">
                                    <div className="col-md-12">
                                        <h3 className="mb-0">Project Information</h3>
                                    </div>
                                </div>
                            </div>
                            <AddProjectList />

                        </div>
                    </div>
                    <ProjectCard />
                </div>
            </main>
        </Fragment>
    );
};


const ProjectCard = () => {
    const [projects, setProjects] = useState([]);
    const [deleteProject, setDeleteProject] = useState();

    const deleteProjects = async id => {
        try {
            const deleteProject = await fetch(`/projects/del/${id}`, {
                method: "DELETE"
            });

            toast.success('Project is successfully deleted!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            });

            setProjects(projects.filter(project => project.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getProjects = async () => {
        try {
            const response = await fetch("/projects");
            const jsonData = await response.json();

            setProjects(jsonData.rows);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getProjects();
    });



    if (projects.length !== 0) {
        return (
            <div className="card">
                <div className="card-body"><div className="chartjs-size-monitor" style={{ position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div className="chartjs-size-monitor-expand" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div style={{ position: 'absolute', width: '1000000px', height: '1000000px', left: 0, top: 0 }} /></div><div className="chartjs-size-monitor-shrink" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div style={{ position: 'absolute', width: '200%', height: '200%', left: 0, top: 0 }} /></div></div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Team Members</th>
                                <th>Team Advisor</th>
                                <th>Achievement</th>
                                <th></th>
                                <th>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project.id}>
                                    <td>{project.teamname}</td>
                                    <td>
                                        {project.teammember1}, &nbsp;
                                        {project.teammember2}
                                    </td>
                                    <td>{project.teamadvisor}</td>

                                    <td>{project.achievement}</td>

                                    <td>
                                    </td>
                                    <td>
                                        <button
                                            className="btn-small btn-danger"
                                            data-bs-toggle="modal"
                                            data-bs-target="#deleteModal"
                                            onClick={() => setDeleteProject(project)}
                                        >
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </button>

                                        <div
                                            className="modal"
                                            id="deleteModal"
                                        >
                                            <div className="modal-dialog modal-dialog-centered modal-sm">
                                                <div className="modal-content ">
                                                    <div className="modal-body">
                                                        <i
                                                            className="fa fa-exclamation-triangle modal-icon modal-icon-danger"
                                                            aria-hidden="true"
                                                        ></i>
                                                        <h6>Confirm deleting Project {deleteProject !== undefined ? deleteProject.teamname : ''}?</h6>
                                                    </div>

                                                    <div className="modal-footer">
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                            data-bs-dismiss="modal"
                                                            onClick={() => deleteProjects(deleteProject.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>)
    } else {
        return (
            <>
                <div className='emptyProject'>
                    <p>There are no projects available.</p>
                </div>
            </>
        )
    }
}

export default ProjectList;