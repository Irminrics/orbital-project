import React, { Fragment, useState } from "react";
import Papa from "papaparse";
import { toast } from 'react-toastify';

const AddStudentList = () => {
    const [csv, setCsv] = useState([]);
    const [validCsv, setValidCsv] = useState(false);

    const handleFileUpload = (e) => {
        const files = e.target.files;
        if (files) {
            Papa.parse(files[0], {
                complete: function (results) {
                    if (results.data[0][0] == "First Name" && results.data[0][1] == "Last Name" && results.data[0][2] == "Student Number" 
                    && results.data[0][3] == "User ID" && results.data[0][4] == "Email" && results.data[0][5] == "Contact Number" && results.data[0][6] == "Programme") {
                        setCsv(results.data.slice(1));
                        setValidCsv(true);
                    } else {
                        setValidCsv(false);
                    }
                }
            }
            )
        }
    };

    const addStudentList = async (e, firstName, lastName, studentNumber, userID, email, contactNumber, programme, password) => {
        e.preventDefault();
        try {
            const body = { firstName, lastName, studentNumber, userID, email, contactNumber, programme, password };
            const response = await fetch(
                "/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );

            const parseRes = await response.json();

            if (parseRes.jwtToken) {
                return true;
            } else {
                return false;
            }

        } catch (err) {
            // console.error(err.message);
            return false;
        }
    };


    const csvToPSQL = async (e) => {
        for (let i = 0; i < csv.length; i++) {
            var result = await addStudentList(e, csv[i][0], csv[i][1], csv[i][2], csv[i][3], csv[i][4], csv[i][5], csv[i][6], "undefined");
        }
        return result;

    }


    const toastResult = async e => {
        if (validCsv) {
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
                    toast.success('Successfully imported students', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                } else {
                    toast.error("Error importing some students: Duplicate students", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                }
            }
        } else {
            toast.error("Please upload a valid CSV file!", {
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
                className="btn-circle btn-md"
                data-bs-toggle="modal"
                data-bs-target="#addStudentModal"
            >
                <i className="fa fa-plus" aria-hidden="true"></i>
            </button>

            <div
                className="modal"
                id="addStudentModal"
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

export default AddStudentList;