import React from 'react'
import Ndata from './Ndata'
import'./style.css'

function Ncard() {
  return (
    <>
      <div className="content grid product grid-ncard">
        {
            Ndata.map((value,index)=>{
                return(
                    <>
                         <div className="box"  key={index}>
                            <div className="img" >
                                <img height="100%" width="100%" src={value.cover} alt="" />
                            </div>
                             <h4>{value.name}</h4>
                            <span>{value.price}</span>
                         </div>
                       
                    </>
                )
            })
        }
      </div>
    </>
  )
}

export default Ncard