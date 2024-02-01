import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout'
import {toast} from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name,setName] =useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [phone,setPhone] =useState("")
    const [address,setAddress] =useState("")
    const [answer,setAnswer] =useState("")
    const navigate= useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
                {name,email,password,phone,address,answer}
            );
            if(res && res.data.success){
                toast.success(res.data && res.data.message)
                navigate('/login')
            }
            else{
                toast.error(res.data.message)
            }
        }
        catch(error){
            console.log(error)
            toast.error('Registration unsuccessfull')
        }
    }

  return (
        <Layout title="Register Ecom-App">
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                <h4 className='title'>REGISTER</h4>
                <div className="mb-3">
                    <input value={name} onChange={(e)=>setName(e.target.value)} 
                    type="text" className="form-control" id="exampleInputName" placeholder='Enter your name' required autoFocus/>
                </div>
                <div className="mb-3">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} 
                    type="email" className="form-control" id="exampleInputEmail" placeholder='Enter your email' required/>
                </div>
                <div className="mb-3">
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} 
                    type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' required/>
                </div>
                <div className="mb-3">
                    <input value={phone} onChange={(e)=>setPhone(e.target.value)} 
                    type="text" className="form-control" id="exampleInputPhone" placeholder='Enter your phone no.' required/>
                </div>
                <div className="mb-3"> 
                    <input value={address} onChange={(e)=>setAddress(e.target.value)} 
                    type="text" className="form-control" id="exampleInputAddress" placeholder='Enter your address' required/>
                </div>
                <div className="mb-3"> 
                    <input value={answer} onChange={(e)=>setAnswer(e.target.value)} 
                    type="text" className="form-control" id="exampleInputAnswer" placeholder='What is your favourite food?' required/>
                </div>
                <button type="submit" className="btn btn-primary">SUBMIT</button>
                </form>
            </div>
        </Layout>
  )
}

export default Register