import React from 'react'
import Catg from './Catg'
import ShopCard from './ShopCard'
import "./style.css"

function Shop({addToCard,shopItems}) {
  return (
    <>
      <section className='shop background NextconteintWidth'>
        <div className="container d-flex gride-Shop">
            <div className='gride-Shop-item display1'>
              <Catg/>
            </div>
            <div className='gride-Shop-item display2'>
               <div className="heading d-flex">
                  <div className="heading-left">
                    <h2>Mobile Phone</h2>
                  </div>
                  <div className="heading-right row ">
                    <span>view all</span>
                    <i className='fa-solid fa-caret-right'></i>
                  </div>
               </div>
               <div className="product-content grid1">
               <ShopCard shopItems={shopItems} addToCard={addToCard}/>
               </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Shop
