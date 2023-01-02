import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Bdata from './Bdata'


function DisCard() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
        ]
      }
  return (
    <>
      <Slider {...settings}>
        {Bdata.map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='img'>
                  <img src={value.cover} alt='' width='100%' />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default DisCard


