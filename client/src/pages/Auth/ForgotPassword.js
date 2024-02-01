import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout'
import {toast} from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const [email,setEmail] =useState("")
    const [newPassword,setNewPassword] =useState("")
    const [answer, setAnswer]=useState("")

    const navigate= useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
                {email,newPassword,answer}
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
            toast.error('Reset unsuccessfull')
        }
    }
  return (
    <Layout title="ForgotPassword Ecom-App">
         <div className='form-container'>
                <form onSubmit={handleSubmit}>
                <h4 className='title'>RESET PASSWORD</h4>
                <div className="mb-3">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} 
                    type="email" className="form-control" id="exampleInputEmail" placeholder='Enter your email' required autoFocus/>
                </div>

                <div className="mb-3">
                    <input value={answer} onChange={(e)=>setAnswer(e.target.value)} 
                    type="text" className="form-control" id="exampleInputAnswer" placeholder='What is your favourite food?' required/>
                </div>
        
                <div className="mb-3">
                    <input value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} 
                    type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your new password' required/>
                </div>
                
                <div className='mb-3'>
                <button type="submit" className="btn btn-primary">SUBMIT</button>
                </div>
                
                </form>
            </div>
    </Layout>
  )
}

export default ForgotPassword