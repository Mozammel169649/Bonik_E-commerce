import React from 'react'
import Categories from './Categories'
import Slide from './Slide'

const Home = ({categorieFilter}) => { 
  return (
    <>
      <div className="home">
        <div className="container homeTop d-flex">
            <Categories categorieFilter={categorieFilter}/>
            <Slide/>
        </div>
      </div>
    </>
  )
}

export default Home
