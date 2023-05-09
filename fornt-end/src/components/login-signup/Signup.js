import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const submitForm = async () => {
        await axios.post('http://localhost:5000/register', { name, email, password })
            .then((result) => {
                if (result) {
                    navigate('/login');
                }

            }
            )
        console.log(name, email, password)
    }

    // useEffect(()=>{
    //   submitForm()
    // },[])


    return (
        <div className='main mt-40'>
            <h1 className='font-14 font-bold mr-44'>Sign Up</h1>
            <div className='input mt-3'  >
                <input className=' h-8 w-96' placeholder=' Enter Name' onChange={(e) => setName(e.target.value)} />
                <input className='mt-2 h-8 w-96' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
                <input className=' h-8 w-96' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                <button className='border border-blue-950' type="submit" onClick={submitForm}>Sign Up</button>
                <div className='mt-4' style={{cursor:"pointer"}}>Have account? <span onClick={() => navigate('/login')}>Login</span></div>
            </div>
        </div>
    )
}

export default Signup;