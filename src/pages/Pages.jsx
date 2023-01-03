import React from 'react'
import BigDiscount from '../component/big/BigDiscount'
import Home from '../component/mainpage/Home'
import Flashdeals from '../component/flashDeals/Flashdeals'
import NewArrivals from '../component/new-arrivals/NewArrivals'
import TopCard from '../component/top/TopCard'
import Shop from '../component/shop/Shop'
import Annu from '../component/banner/Annu'
import Wrapper from '../component/wrapper/Wrapper'

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
