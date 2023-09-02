// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
const Form = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");

    const handleClick = (e) => {
        e.preventDefault()
        console.log(name + email + password);
        setlname([])
        setemail([])
        setpassword([])
        const userdata = { name, email, password }
        console.log(userdata);
    }
    return (
        <>
            <form className="col-md-6 col-lg-4 m-auto p-4 border rounded-3 mt-5 shadow">
                <div className="mb-3">
                    <label className="">First Name</label>
                    <input type="text" className="form-control shadow-none" value={fname} onChange={(e) => setfname(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="">Last Name</label>
                    <input type="text" className="form-control shadow-none" value={lname} onChange={(e) => setlname(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="">Email address</label>
                    <input type="email" className="form-control shadow-none" value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="">Password</label>
                    <input type="password" className="form-control shadow-none" value={password} onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="">Confirm Password</label>
                    <input type="password" className="form-control shadow-none" value={cpassword} onChange={(e) => setcpassword(e.target.value)} />
                </div>
                <div className="text-center">
                    <button onClick={handleClick} type="submit" className="btn w-100  btn-dark">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
