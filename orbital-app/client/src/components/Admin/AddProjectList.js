import React, { Fragment, useState } from "react";
import Papa from "papaparse";
import { toast } from 'react-toastify';

const AddProjectList = () => {
    const [csv, setCsv] = useState([]);

    const handleFileUpload = (e) => {
        const files = e.target.files;
        if (files) {
            Papa.parse(files[0], {
                complete: function (results) {
                    setCsv(results.data.slice(1));
                    console.log("Finished:", results.data);
                }
            }
            )
        }
    };

    const addProjectList = async (e, teamName, teamMember1, teamMember2, teamAdvisor, achievement) => {
        e.preventDefault();
        try {
            const body = { teamName, teamMember1, teamMember2, teamAdvisor, achievement };
            const response = await fetch(
                "http://localhost:3001/projects/create",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );

            return true;

        } catch (err) {
            console.error(err.message);
            return false;
        }
    };


    const csvToPSQL = async (e) => {
        for (let i = 0; i < csv.length; i++) {
            var result = await addProjectList(e, csv[i][0], csv[i][1], csv[i][2], csv[i][3], csv[i][4]);
            if (result === false) {
                return result;
            }
        }
        return result;
    }


    const toastResult = async e => {
        const result = await csvToPSQL(e);
        if (csv.length === 0) {
            toast.error("File is not chosen!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            });
        } else {
            if (result === true) {
                toast.success('Successfully imported projects', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            } else {
                toast.error("Error importing project", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            }
        }
    }

    return (
        <Fragment>
            <button
                type="button"
                class="btn-small btn-success"
                data-bs-toggle="modal"
                data-bs-target="#addProjectModal"
            // data-target={`#id${todo.todo_id}`}
            >
                <i class="fa fa-plus" aria-hidden="true"></i>
            </button>

            {/* 
        id = id10
      */}
            <div
                className="modal"
                id="addProjectModal"
            >
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content ">
                        <div className="modal-body">
                            <i
                                className="fa fa-upload modal-icon modal-icon-success"
                                aria-hidden="true"
                            ></i>

                            <input
                                className="form-control form-control-sm"
                                type="file"
                                accept=".csv"
                                onChange={(e) => handleFileUpload(e)}
                            />

                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-success"
                                data-bs-dismiss="modal"
                                onClick={(e) => toastResult(e)}
                            >
                                Import
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
        </Fragment>
    );
};

export default AddProjectList;