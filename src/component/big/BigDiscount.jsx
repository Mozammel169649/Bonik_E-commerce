import React from 'react'
import { Link } from 'react-router-dom'
import DisCard from './DisCard'

function BigDiscount() {
  return (
    <>
      <section className='Big-discount background'>
         <div className="container">
            <div className="heading d-flex">
                <div className="heading-left f-flex">
                <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                  <h2>Big Discount</h2>
                </div>
                <div className="heading-right">
                    <Link to='/viewAll'>
                        <span>view all</span>
                        <i className='fa-solid fa-caret-right'></i>
                    </Link>
                </div>
            </div>
            <DisCard/>
         </div>
      </section>
    </>
  )
}

export default BigDiscount
