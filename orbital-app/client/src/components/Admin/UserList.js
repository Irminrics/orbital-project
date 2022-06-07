import { Fragment, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import EditUserList from './EditUserList'
import AddUserList from './AddUserList'


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [deleteUser, setDeleteUser] = useState();

    const deleteUsers = async id => {
        try {
            const deleteTodo = await fetch(`/users/del/${id}`, {
                method: "DELETE"
            });

            toast.success('User is successfully deleted!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            });

            setUsers(users.filter(user => user.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getUsers = async () => {
        try {
            const response = await fetch("/users");
            const jsonData = await response.json();

            setUsers(jsonData.rows);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getUsers();
    });

    return (
        <Fragment>
            <main className="pt-5 mx-lg-5">
                <div className="container-xxl mt-5">
                    <div className="card wow fadeIn animated blue white-text mb-3" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                        {/*Card content*/}
                        <div className="card-body d-sm-flex justify-content-between">
                            <div className="panel box-shadow-none content-header">
                                <div className="panel-body">
                                    <div className="col-md-12">
                                        <h3>User Information</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <i className="fa fa-pie-chart mr-3" />
                            </div>
                        </div>
                    </div>

                    {/*Card*/}
                    <div className="card">
                        {/*Card content*/}
                        <div className="card-body"><div className="chartjs-size-monitor" style={{ position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div className="chartjs-size-monitor-expand" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div style={{ position: 'absolute', width: '1000000px', height: '1000000px', left: 0, top: 0 }} /></div><div className="chartjs-size-monitor-shrink" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div style={{ position: 'absolute', width: '200%', height: '200%', left: 0, top: 0 }} /></div></div>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Student Number</th>
                                        <th>User ID</th>
                                        <th>Email</th>
                                        <th>Contact Number</th>
                                        <th>Programme</th>
                                        <th></th>
                                        <th>
                                            <AddUserList />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>
                                                {user.studentnumber}
                                            </td>
                                            <td>
                                                {user.userid}
                                            </td>
                                            <td>
                                                {user.email}
                                            </td>
                                            <td>
                                                {user.contactnumber}
                                            </td>
                                            <td>
                                                {user.programme}
                                            </td>
                                            <td>
                                                <EditUserList user={user}/>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn-small btn-danger"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#deleteModal"
                                                    onClick={() => setDeleteUser(user)}
                                                >
                                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                                </button>

                                                <div
                                                    className="modal"
                                                    id="deleteModal"
                                                >
                                                    <div className="modal-dialog modal-dialog-centered modal-sm">
                                                        <div className="modal-content ">
                                                            <div className="modal-body">
                                                                <i
                                                                    class="fa fa-exclamation-triangle modal-icon modal-icon-danger"
                                                                    aria-hidden="true"
                                                                ></i>
                                                                <h6>Confirm deleting {deleteUser !== undefined ? deleteUser.firstname : ''}?</h6>
                                                            </div>

                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger"
                                                                    data-bs-dismiss="modal"
                                                                    onClick={() => deleteUsers(deleteUser.id)}
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
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default UserList;