import React, { useState } from 'react'
import "../assets/App.css"
import Singletodo from './Singletodo'
import { RiDeleteBin5Fill } from "react-icons/ri"

const Todo = () => {

    const [todo, settodo] = useState('')
    const [stored, setstored] = useState([])
    const handlesubmit = (e) => {
        e.preventDefault();

        const myData = {
            todo, id:  Date.now()
        }
        setstored([...stored, myData])
        settodo("")
    }
    const handledelete=(id)=>{
        return setstored(stored.filter(todo=>todo.id !== id))
    }
    return (
        <>
            <div className="container  ">
                <h1 className="text-center">todo app</h1>
                <form className="col-md-6 col-lg-4 m-auto p-4 border rounded-3 mt-2 shadow col-md-8 p-5">
                    <div className="mb-3">
                        <label className='ms-0' htmlFor="">Todo here</label>
                        <input value={todo} onChange={(e) => settodo(e.target.value)} type="text" className="form-control shadow-none" placeholder='enter you text here ..' />
                    </div>
                    <button onClick={handlesubmit} className="text-light shadow btn btn-info mt-3 w-100">Add todo </button>
                </form>
            </div>

            <div className="row container mt-5 gap-4  justify-content-center m-auto">
                {stored.map((todo) => {
                    return <>
                        <div className="col-lg-3 border border-2 text-center shadow-sm">
                            <Singletodo key={todo.id} {...todo} />
                            <RiDeleteBin5Fill onClick={handledelete} className='text-danger fs-2 m-3 text-center ' />
                        </div>
                    </>
                })}
            </div>

        </>
    )
}

export default Todo