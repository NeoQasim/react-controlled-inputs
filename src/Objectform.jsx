import { useState } from 'react'

const Objectform = () => {
    const [formfields, setformfields] = useState({
        fname: "", lname: "", email: "", password: "", cpassword: ""
    })
    const { fname, lname, email, password, cpassword } = formfields

    const handle = (e) => {
        setformfields((prevalue) => ({
            ...prevalue,
            [e.target.name]: e.target.value,
        }))
    }
    return (
        <>
            <form className="col-md-6 col-lg-4 m-auto p-4 border rounded-3 mt-5 shadow">
                <div className="mb-3">
                    <label className="">First Name</label>
                    <input value={fname} onChange={handle} name='fname' type="text" className="form-control shadow-none" />
                </div>
                <div className="mb-3">
                    <label className="">Last Name</label>
                    <input value={lname} onChange={handle} name='lname' type="text" className="form-control shadow-none" />
                </div>
                <div className="mb-3">
                    <label className="">Email address</label>
                    <input value={email} onChange={handle} name='email' type="email" className="form-control shadow-none" />
                </div>
                <div className="mb-3">
                    <label className="">Password</label>
                    <input value={password} onChange={handle} name='password' type="password" className="form-control shadow-none" />
                </div>
                <div className="mb-3">
                    <label className="">Confirm Password</label>
                    <input value={cpassword} onChange={handle} name='cpassword' type="password" className="form-control shadow-none" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn w-100  btn-dark">
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default Objectform