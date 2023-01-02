import React from "react"
import { Link } from 'react-router-dom'
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid-footer'>
          <div className='box grid-footer-item '>
            <h1>Bonik</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d-flex'>
              <div className='img d-flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d-flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box grid-footer-item'>
            <h2>About Us</h2>
            <ul>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/ourStores">Our Stores</Link></li>
              <li><Link to="/ourCares">Our Cares</Link></li>
              <li><Link to="/termsConditions">Terms & Conditions</Link></li>
              <li><Link to="/privacyPolicy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className='box grid-footer-item'>
            <h2>Customer Care</h2>
            <ul>
              <li><Link to="/helpCenter">Help Center</Link></li>
              <li><Link to="/howtoBuy">How to Buy</Link></li>
              <li><Link to="/trackOrder">Track Your Order </Link></li>
              <li><Link to="/corporatePurchasing">Corporate & Bulk Purchasing </Link></li>
              <li><Link to="/returnsRefunds">Returns & Refunds </Link></li>
            </ul>
          </div>
          <div className='box grid-footer-item'>
            <h2>Contact Us</h2>
            <ul>
              <li><Link to="/location">70 Washington Square South, New York, NY 10012, United States</Link></li>
              <li>Email: mozammel1696@gmail.com</li>
              <li>Phone: +8801881558315</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
