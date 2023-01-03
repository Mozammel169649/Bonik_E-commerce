import React from 'react'
import './Annu.css'

function Annu() {
    const style={
        
        height:'340px'
    }
    const style1={
       
        height:'340px'
    }
  return (
    <>
      <section className='annu background'>
         <div className="container grid-container d-flex">
            <div className="img grid-item"  style={style}>
                <img src='./images/banner-1.png' alt="" height='100%' width='100%'/>
            </div>
            <div className="img grid-item" style={style1}>
                <img src='./images/banner-2.png' alt="" height='100%' width='100%'/>
            </div>
         </div>
      </section>
    </>
  )
}

export default Annu
