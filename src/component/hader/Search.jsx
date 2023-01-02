import React from 'react'
import './Search.css'
import logo from './logo/logo.svg'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { CategoryContext } from '../../App'


        window.addEventListener("scroll",function(){
          const header= document.querySelector(".search")
          header.classList.toggle("active",window.scrollY > 100)
      })

const Search = () => {
           const [cardItem]=useContext(CategoryContext)
    
  return (
    <section className='search'>
        <div className="container c-flex">
            <div className="logo width">
               <img className='img-logo' src={logo} alt="" />
               <i className="fa-brands fa-square-behance icon-logo"></i>
            </div>

            <div className="search-box f-flex">
               <i className='fa fa-search'></i>
               <input type="text" placeholder='Search and hit enter'/>
               <span>ALL</span>
            </div>
            
            <div className="icon f-flex width">
                <i className='fa fa-user icon-circle'></i>
                <div className='cart'>
                    <Link to='/card'>
                        <i className='fa fa-shopping-bag icon-circle'></i>
                    </Link>
                    <span>{cardItem.length}</span>
                </div>
            </div>

        </div>
        
    </section>
  )
}

export default Search
