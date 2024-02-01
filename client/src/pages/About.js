import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About Ecom-App"}>
      <div className='row contactus'>
        <div className='col-md-6'>
          <img
          src="aboutUs.png"
          alt="aboutus"
          style={{width:"90%"}}/>
        </div>
        <div className='col-md-4'>
          <h1 className='bg-dark p-2 text-white text-center'>ABOUT US</h1>
          <p className='text-justify mt-2'>
          Welcome to Ecom-App, where innovation meets style in the world of online shopping. We are dedicated to providing a seamless and affordable shopping experience, offering a curated selection of quality products that elevate your lifestyle. Our user-friendly platform, cutting-edge design, and commitment to customer satisfaction set us apart. At Ecom-App, we're not just an e-commerce company; we're your go-to destination for convenience, quality, and contemporary living. Join us on this journey, and thank you for choosing to redefine your online shopping experience with us.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About