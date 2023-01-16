

import { Link } from "react-router-dom"
import './style.css'


const Catg = ({brandFilter}) => {

  
 
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
  ]
  return (   
    <>
      <div className='category'>
        <div className='chead d-flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
             <Link to='/filter'>
                <div className='box f-flex' key={index} onClick={(e)=>brandFilter(e.target.innerText)}>
                  <img src={value.cateImg} alt='' />
                  <span>{value.cateName}</span>
                </div>
             </Link>
          )
        })}
        <div className='box box2'>
            <Link to="/mobile">
                <button >View All Brands</button>     
            </Link>
        </div>
      </div>
    </>
  )
}

export default Catg
