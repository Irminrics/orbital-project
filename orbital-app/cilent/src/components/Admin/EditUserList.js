import React, { Fragment, useState } from "react";

const EditUserList = ({ todo }) => {
    // const [description, setDescription] = useState(todo.description);

    // const updateDescription = async e => {
    //     e.preventDefault();
    //     try {
    //         const body = { description };
    //         const response = await fetch(
    //             `http://localhost:3001/users/${todo.todo_id}`,
    //             {
    //                 method: "PUT",
    //                 headers: { "Content-Type": "application/json" },
    //                 body: JSON.stringify(body)
    //             }
    //         );

    //         window.location = "/";
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // };

    return (
        <Fragment>
            <button
                type="button"
                class="btn-small btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
            // data-target={`#id${todo.todo_id}`}
            >
                <i class="fa fa-edit" aria-hidden="true"></i>
            </button>

            {/* 
        id = id10
      */}
            <div
                className="modal"
                // id={`id${todo.todo_id}`}
                id="exampleModalCenter"
            // onClick={() => setDescription(todo.description)}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit User</h4>
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
                            <input
                                type="text"
                                className="form-control"
                            // value={description}
                            // onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                            // onClick={e => updateDescription(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                            // onClick={() => setDescription(todo.description)}
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