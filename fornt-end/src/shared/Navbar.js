import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("user")
    console.log("Clear session")
  }

  return (
    <div>
        <ul className='navbar-ul'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-product">Add Product</Link></li>
            {/* <li><Link to="/update">Update Product</Link></li> */}
            <li><Link to="/remove">Remove Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li className='cursor-pointer'><span onClick={logout}>Logout</span></li> 
        </ul>
    </div>
  )
}

export default Navbar