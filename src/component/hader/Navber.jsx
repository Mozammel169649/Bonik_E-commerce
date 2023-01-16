import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navber.css'

const Navbar = () => {
      const [MobileMenu, setMobileMenu]= useState(false);

      
  return (
    <>
      <header className='header'> 
        <div className="container d-flex">

          <div className="categories d-flex">
            <span className='fa fa-border-all'></span>
            <h4>Categoris <i className='fa fa-chevron-down'></i></h4>
          </div>

          <div className="navlink">
            <ul className={MobileMenu ? "nav-links-MobileManu" : "link f-flex capitalize"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ViewAll">Shop</Link>
              </li>
              <li>
                <Link to="">User Account</Link>
              </li>
              {/* <li>
                <Link to="/item">Vandor Account</Link>
              </li> */}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            
            <button className='toggle' onClick={()=> setMobileMenu(!MobileMenu)}>
              {
                MobileMenu? <i className='fas fa-times close home-btn'></i> :
                <i className='fa fa-bars open'></i>
              }
            </button>  

          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
