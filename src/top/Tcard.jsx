import React from 'react';
import Tdata from './Tdata';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Tcard() {
    const settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
         
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
        ]
       
      };
  return (
    <>
    <Slider {...settings}>
    {
        Tdata.map((value,index)=>{
            return(
                <>
                  <div className="box product" key={index}>
                     <div className="nametop d-flex">
                        <span className='tleft'>{value.name}</span>
                        <span className='tright'>{value.desc}</span>
                     </div>
                     <div className="img">
                        <img src={value.cover} alt="" />
                     </div>
                  </div>
                </>
            )
        })
        }
    </Slider>
    </>
  )
}

export default Tcard
