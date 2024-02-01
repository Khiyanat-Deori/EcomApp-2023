
import React from 'react'
import { useSearch } from '../context/Search'
import Layout from '../components/Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'

const Searches = () => {
    const[values,setValues]=useSearch()
    const navigate=useNavigate()
  return (
    <Layout title={'Search results'}>
        <div className='container justify-content-center similar-products'>
            <div className='text-center'>
                <h1>Search Results</h1>
                <h6>{values?.results.length<1?'No Products Found':`"Found ${values?.results.length}"`}</h6>
                <div className="row">
          <div className="col-md-12">
                <div className='d-flex flex-wrap justify-content-around mt-4'>
            {values?.results.map((p)=>(
                    // <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`} className='product-link'>
                    <div className="card m-2">
                        <Link to={`/product/${p.slug}`}>
                    <img className="card-img-top" src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} alt={p.name}/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description.substring(0,30)}...</p>
                        <p className="card-text">$ {p.price}</p>
                        <button
                        className="btn btn-success ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                        >
                        More Details
                        </button>
                        
                    </div>
                    </div>
                    // </Link>              
                ))}
            </div>
            </div>
            </div>
            </div>
        </div>
    </Layout>
  )
}

export default Searches