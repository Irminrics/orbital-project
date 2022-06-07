import React, { Fragment, useState } from "react";
import { toast } from 'react-toastify';

const EditUserList = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstname);
    const [lastName, setLastName] = useState(user.lastname);
    const [studentNumber, setStudentNumber] = useState(user.studentnumber);
    const [userid, setUserid] = useState(user.userid);
    const [email, setEmail] = useState(user.email);
    const [contactNumber, setContactNumber] = useState(user.contactnumber);
    const [programme, setProgramme] = useState(user.programme);

    const updateUser = async e => {
        e.preventDefault();
        try {
            const body = { firstName, lastName, studentNumber, userid, email, contactNumber, programme };
            const response = await fetch(
                `/users/update/${user.id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }

            );
            const parseRes = await response.json();
            console.log(parseRes);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    };

    const toastResult = async e => {
        const result = await updateUser(e);
        console.log(result);
        if (result === true) {
            toast.success('Successfully edited user', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            });
        } else {
            toast.error("Error editing user", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }

    }

    return (
        <Fragment>
            <button
                type="button"
                class="btn-small btn-warning"
                data-bs-toggle="modal"
                data-bs-target={`#userid${user.id}`}
            >
                <i class="fa fa-edit" aria-hidden="true"></i>
            </button>

            {/* 
        id = id10
      */}
            <div
                className="modal"
                id={`userid${user.id}`}
            // onClick={() => setDescription(todo.description)}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit User Information</h4>
                            <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                            // onClick={() => setDescription(todo.description)}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <label>First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                            <label>Student Number</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={studentNumber}
                                onChange={e => setStudentNumber(e.target.value)}
                            />
                            <label>User ID</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={userid}
                                onChange={e => setUserid(e.target.value)}
                            />
                            <label>Email</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <label>Contact Number</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue={contactNumber}
                                onChange={e => setContactNumber(e.target.value)}
                            />

                            <label>Programme</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue={programme}
                                onChange={e => setProgramme(e.target.value)}
                            />

                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-bs-dismiss="modal"
                                onClick={e => toastResult(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditUserList;