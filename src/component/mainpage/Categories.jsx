import React from 'react'
import { Link } from 'react-router-dom'
import categoriesData from'./categoriesData'

const Categories = ({categorieFilter}) => {
  
  return (
    <>
     <div className="category displayCatagory">
      {
       categoriesData.map((value,index)=>{
        return(
          <Link to="/category"> 
              <div className="box f-flax" key={index} onClick={(e)=>categorieFilter(e.target.innerText)}>
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
              </div>
          </Link>
          
        )
       })
       }
     </div>
    </>
  )
}

export default Categories
