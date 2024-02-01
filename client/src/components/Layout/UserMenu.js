import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
    <div className='text-center'>
    <Link to="/dashboard/user/" className="navbar-brand">DASHBOARD</Link>
        <div className="list-group">
       
            <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</NavLink>
            <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</NavLink>
        </div>
    </div>
    </>
  )
}

export default UserMenu