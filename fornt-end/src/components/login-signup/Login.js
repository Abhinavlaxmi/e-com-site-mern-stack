import React, { useState } from 'react'
import './signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginHandler = () =>{
        axios.post('http://localhost:5000/login', {email, password}).then((result)=>{
            let temp = result.data;
            if(temp.result != "No data found"){
                localStorage.setItem("user", email)
                navigate('/');
            } else{
                alert("Wrong Email/Password");
            }
        })

    }

    return (
        <>
            <div className='flex justify-center h-full '>
                <div className=' h-full w-2/6 grid grid-cols-1 mt-11 content-center'>
                    <div className='login-input d-flex'>
                        <h2 className='font-bold m-5 flex items-center'>Login Page</h2>
                        <div className='m-5'>
                            <input className='border border-blue-950 w-full h-8' type='text' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' />
                        </div>
                        <div className='m-5'>
                            <input className='border border-blue-950 w-full h-8' type='text' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' />
                        </div>
                        <div className='m-5'>
                            <button className='border border-black h-8 w-40' onClick={loginHandler} >Login</button>
                        </div>
                        <div>Haven't account? <span className='cursor-pointer font-12 bg-pink-200 ' onClick={()=> navigate('/Signup')}>Register here</span></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login