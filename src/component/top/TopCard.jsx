import React from 'react'
import { Link } from 'react-router-dom'
import Tcard from './Tcard'
import './TopCard.css'

function TopCard() {
  return (
    <>
      <section className='TopCard background'>
        <div className="container">
        <div className="heading d-flex">
           <div className="heading-left row f-flex">
             <i className='fa-solid fa-border-all'></i>
             <h2>Top Categories</h2>
           </div> 
           <div className="heading-right row">
                <Link to='/viewAll'>
                    <span>view all</span>
                    <i className='fa-solid fa-caret-right'></i>
                </Link>
           </div>
        </div>
           <Tcard/>
        </div>
      </section>
    </>
  )
}

export default TopCard
