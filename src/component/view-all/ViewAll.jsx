import React from 'react'
import { Link } from 'react-router-dom'
import fackData from "../../fakeData/index"
import './viewAll.css'


const ViewAll = ({addToCard,productDetelse}) => {
    return (
        <>
           <section className='view background'>
                <div className="container gride-view">
                 <>
                    {
                        fackData.map( (product, index) => {
                            const {discount,key,cover,price} =product;
                            return(
                               
                                <div className="box box-items" onClick={()=>productDetelse(product)} key={index}>
                                <div className="product">
                                    <div className="img">
                                        <span className='discount'>{discount}% off</span>
                                        <img src={cover} alt="" style={{height:'230px', width:'230px'}} />
                                        <div className="produect-like">
                                            <label htmlFor="">0</label><br />
                                            <i className='fa-regular fa-heart'></i>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                       <Link to='/item'>
                                         <h3 style={{fontSize:'16px'}}>{key}</h3>
                                        </Link>
                                        <div className="rate">
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className="product-price">
                                            <h4>{price}.00</h4>
                                            <button onClick={()=>addToCard(product)}>
                                                <i className='fa fa-plus'></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </div> 
                                           
                            )
                        })
                    }
                 </>
                </div>

          </section>   
        </>
      
      )
}

export default ViewAll
