import { useState } from 'react'

const Objectstate = () => {
    const [user, setuser] = useState({
        name: "ali", email: "ali@mail.com", age: 20
    })
    const change = () => {

        setuser({...user,name:"cahnge"})
    }
    const { name, email, age } = user
    return (
        <>
            <div className="container mt-5 text-center">
                Objectstate
                <p>{name} </p>
                <p>{email} </p>
                <p>{age} </p>
                <button onClick={change} className="btn btn-dark">change</button>
            </div>



        </>
    )
}

export default Objectstate