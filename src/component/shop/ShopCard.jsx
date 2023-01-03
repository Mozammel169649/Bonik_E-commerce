import React from 'react'
import './style.css'


function ShopCard({shopItems,addToCard}) {
 
  return (
    <>
      {
        shopItems.map( (product, index) => {
            const {discount, cover, name, price} =product;
            return(
                <div className="box box-items" key={index}>
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
                        <h3 style={{fontSize:'16px'}}>{name}</h3>
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
  )
}

export default ShopCard
