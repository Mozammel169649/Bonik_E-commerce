import React from 'react'
import "./cardDetelse.css"

function CardDetelse({item,addToCard}) {
    const {features,brand,shipping,starCount,star,stock,priceFraction,wholePrice,seller,name,category,key,discount,cover,price}=item;
  return (
    <section>
        <div className='container background'>
        <>
      <div class="card">
        <div class="left">
            <img src={cover}/>
        </div>

        <div class="right">
            <h3>{name}</h3>
            <h1>{category}</h1>
            <h1>${price}</h1>
            
                    <i class="fa-solid fa-star"/>
                    <i class="fa-solid fa-star"/>
                    <i class="fa-solid fa-star"/>     
                    <i class="fa-solid fa-star"/>     
                    <i class="fa-solid fa-star"/>                     
             
            <h3>Brand : {brand}</h3>
            <h4>Available Offer Discount : {discount}%</h4>
             {
                features.map((e)=>{
                    <p>{e.description} : {e.value}</p>
                  })
             }
             <button onClick={()=>addToCard(item)}>Add To Cart</button>

        </div>
    </div>
      
    </>
        </div>
    </section>
    
  )
}

export default CardDetelse
