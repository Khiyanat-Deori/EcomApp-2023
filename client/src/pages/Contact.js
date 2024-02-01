import React from 'react'
import Layout from '../components/Layout/Layout'
import {BiMailSend,BiPhoneCall,BiSupport} from 'react-icons/bi'

const Contact = () => {
  return (
    <Layout title={"ContactUs  Ecom-App"}>
      <div className='row contactus'>
        <div className='col-md-6'>
          <img
          src="contactUs.png"
          alt="contactus"
          style={{width:"90%"}}/>
        </div>
        <div className='col-md-4'>
          <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
          <p className='text-justify mt-2'>
            Feel free to contact anytime for any query we are 24x7 available !
          </p>
          <p className='mt-3'>
            <BiMailSend/> : deorikhiyanat@gmail.com
          </p>
          <p className='mt-3'>
            <BiPhoneCall/> : +91-8638515081
          </p>
          <p className='mt-3'>
            <BiSupport/> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact