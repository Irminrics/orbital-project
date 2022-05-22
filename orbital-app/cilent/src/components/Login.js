import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Login = ({ setAuth }) => {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const { email, password } = inputs;

    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { email, password }
            const response = await fetch("http://localhost:3001/auth/login", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            })

            const parseRes = await response.json();

            if (parseRes.jwtToken) {
                localStorage.setItem("token", parseRes.jwtToken);
                setAuth(true);
                toast.success('Login Successfully', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            } else {
                setAuth(false);
                toast.error(parseRes, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            }

        } catch (err) {
            console.error(err.message);
        }
    }



    return (
        <>
            <section id='intro-div'>
                <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
                    <div className="container-xxl">
                        <div className="row gx-lg-5 align-items-center">
                            <div id="intro-left" className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight text-left">
                                    What is <span className="text-primary">Orbital?</span>
                                </h1>
                                <p style={{ color: 'hsl(217, 10%, 50.8%)', textAlign: 'justify', textJustify: 'inter-word' }}>
                                    Orbital is the School of Computing’s self-driven programming summer experience. It is designed to give first-year students the opportunity to 1) self-learn and 2) build something useful. It is designed as a 4 modular credit (MC) module that is taken pass/fail (CS/CU) over the summer<sup>1</sup>.
                                    Our School does not teach programming prowess as formal coursework, as it is not academic in nature. Orbital is one mode where young energetic students can fill this gap by their own initiative.
                                    <br /> <br />
                                    <sup>1</sup>Credit will be provided under the 4 MC S/U module code CP2106 Independent Software Development Project.
                                </p>
                            </div>


                            <div id="intro-right" className="col-lg-5">
                                <div className="card">
                                    <div className="py-5 px-md-5">
                                        <h1><span>Sign in</span></h1>
                                        <p>Login here using your username</p> <br />
                                        <form onSubmit={onSubmitForm}>
                                            {/* Email input */}
                                            <div className="form-outline mb-4">
                                                <input type="email" name="email" className="form-control" placeholder="Email" defaultValue={email} onChange={(e) => onChange(e)} />
                                            </div>
                                            {/* Password input */}
                                            <div className="form-outline mb-4">
                                                <input type="password" name="password" className="form-control" placeholder="Password" defaultValue={password} onChange={(e) => onChange(e)} />
                                            </div>
                                            {/* Submit button */}
                                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                                Login
                                            </button>

                                            <p>Not a member? &nbsp;
                                                <a id="Registerbtn" className="text-primary">Register</a>
                                                <br />
                                                <a id="ForgetPasswordBtn" className="text-primary">Forgot Password?</a>
                                            </p>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login