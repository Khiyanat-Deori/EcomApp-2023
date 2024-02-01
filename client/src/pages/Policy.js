import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"PrivacyPolicy Ecom-App"}>
      <div className='row contactus'>
        <div className='col-md-6'>
          <img
          src="policy.png"
          alt="privacyPolicy"
          style={{width:"90%"}}/>
        </div>
        <div className='col-md-4'>
          <h1 className='bg-dark p-2 text-white text-center'>PRIVACY POLICY</h1>
          <p className='text-justify mt-2'>
          1. Information Collection: We collect personal information like names and contact details with consent or as necessary for our services. Automated data, such as IP addresses, is gathered for analytics.
          </p><p className='text-justify mt-2'>
          2. Data Usage: Personal information is used solely for processing orders, providing customer support, and improving our services. We do not share it for third-party marketing without explicit consent.
          </p><p className='text-justify mt-2'>
          3. Security Measures: Industry-standard security measures, including SSL technology, are in place to protect against unauthorized access or data compromise.
          </p><p className='text-justify mt-2'>
          4. Cookies and Tracking: We use cookies to enhance user experience, personalize content, and analyze site traffic. Users can manage cookie preferences through browser settings.
          </p><p className='text-justify mt-2'>
          5. Policy Updates and Contact: The privacy policy is updated periodically; users will be notified of significant changes. For inquiries, users can contact us at [contact email/phone number].
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy