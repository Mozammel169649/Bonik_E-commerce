import React from 'react'
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
                    <span>View all</span>
                    <i className='fa-solid fa-caret-right'> </i>
                </div>
            </div>
            <DisCard/>
         </div>
      </section>
    </>
  )
}

export default BigDiscount
