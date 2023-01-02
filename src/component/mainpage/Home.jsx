import React from 'react'
import Categories from './Categories'
import Slide from './Slide'

const Home = () => { 
  return (
    <>
      <div className="home">
        <div className="container homeTop d-flex">
            <Categories/>
            <Slide/>
        </div>
      </div>
    </>
  )
}

export default Home
