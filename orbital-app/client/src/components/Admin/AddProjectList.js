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
            console.log(JSON.stringify(body));

            const response = await fetch(
                "/projects/create",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );

            const parseRes = await response.json();

            if (parseRes.newProject) {
                return true;
            } else {
                return false;
            }

        } catch (err) {
            console.error(err.message);
            return false;
        }
    };


    const csvToPSQL = async (e) => {
        console.log(csv.length);
        for (let i = 0; i < csv.length; i++) {
            var result = await addProjectList(e, csv[i][0], csv[i][1], csv[i][2], csv[i][3], csv[i][4]);
            if (result === false) {
                console.log('false');
                console.log(i);

                return result;
            }
            console.log('last line in loop');

        }
        console.log('out of loop');

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
                toast.error("Error importing projects", {
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
                className="btn-circle btn-md"
                data-bs-toggle="modal"
                data-bs-target="#addProjectModal"
            >
                <i className="fa fa-plus" aria-hidden="true"></i>
            </button>

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