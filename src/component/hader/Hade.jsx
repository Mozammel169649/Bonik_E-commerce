import React from 'react'
import './Hade.css'


const Hade = () => {
  return (
    <>
      <section className='hade'>
         <div className="container d-flex">
            <div classNamss="left row">
                <i className='fa fa-phone'></i>
                <label htmlFor="" className='lable-hiden' >+8801881558315</label>
                <label htmlFor="" className='lable-display' >Phone</label>
                <i class="fa fa-envelope"></i>
                <label htmlFor="" className='lable-hiden'>mozammel169649@gmail.com</label>
                <label htmlFor="" className='lable-display' >Email</label>
            </div>
            <div className="right row RText">
              <label htmlFor="" className='lable-hiden'>Theme FAQ's</label>
              <label htmlFor="" className='lable-hiden'>Need Helps</label>
              <i class="fa fa-flag"></i>
              <label htmlFor="">EN</label>
              <i class="fa fa-flag"></i>
              <label htmlFor="">USD</label>
            </div>
         </div>
      </section>
    </>
  )
}

export default Hade
