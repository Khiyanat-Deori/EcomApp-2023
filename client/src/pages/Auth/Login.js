import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout'
import {toast} from 'react-toastify'
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom'
import { useAuth } from '../../context/Auth'

const Login = () => {
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const[auth,setAuth]=useAuth()
    const navigate= useNavigate()
    const location= useLocation()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
                {email,password}
            );
            if(res && res.data.success){
                toast.success(res.data && res.data.message)
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token
                })
                localStorage.setItem('auth',JSON.stringify(res.data))
                navigate(location.state || '/')
            }
            else{
                toast.error(res.data.message)
            }
        }
        catch(error){
            console.log(error)
            toast.error('Login unsuccessfull')
        }
    }

  return (
        <Layout title="Login Ecom-App">
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                <h4 className='title'>LOGIN</h4>
                <div className="mb-3">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} 
                    type="email" className="form-control" id="exampleInputEmail" placeholder='Enter your email' required autoFocus/>
                </div>
        
                <div className="mb-3">
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} 
                    type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' required/>
                </div>
                
                <div className='mb-3'>
                <button type="submit" className="btn btn-primary">SUBMIT</button>
                </div>
                
                <div className='mb-3'>
                    <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>Forgot Password</button>
                </div>
                </form>
            </div>
        </Layout>
  )
}

export default Login