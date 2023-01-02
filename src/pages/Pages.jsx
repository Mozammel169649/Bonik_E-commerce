import React from 'react'
import BigDiscount from '../big/BigDiscount'
import Home from '../component/mainpage/Home'
import Flashdeals from '../flashDeals/Flashdeals'
import NewArrivals from '../new-arrivals/NewArrivals'
import TopCard from '../top/TopCard'
import Shop from '../shop/Shop'
import Annu from '../banner/Annu'
import Wrapper from '../wrapper/Wrapper'

const Pages = ({productItems, addToCard,shopItems}) => {
  return (
    <>
      <Home/>
      <Flashdeals productItems={productItems} addToCard={addToCard}/>
      <TopCard/>
      <NewArrivals/>
      <BigDiscount/>
      <Shop shopItems={shopItems} addToCard={addToCard}/>
      <Annu/>
      <Wrapper/>
    </>
  )
}

export default Pages
