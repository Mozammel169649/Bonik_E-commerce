import { useContext } from "react";
import Slider from "react-slick";
import { CategoryContext } from "../App";


const NextArrow = (props) => {
     const {onClick}=props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>
    )
}

const PrevArrow = (props) => {
    const {onClick}=props
   return(
       <div className="control-btn" onClick={onClick}>
           <button className="prev">
               <i className='fa fa-long-arrow-alt-left'></i>
           </button>
       </div>
   )
} 

function Flashcard(props) {
    const {productItems,addToCard}=props
    // const [productItems,addToCard]=useContext(CategoryContext)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow : <NextArrow />,
        prevArrow : <PrevArrow />,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
          ]
      };

  return (
    <>
     <Slider {...settings}>
     {
        productItems.map( pd => {
            const {discount, cover, name, price} =pd;
            return(
                <div className="box ">
                <div className="product mtop">
                    <div className="img">
                        <span className='discount'>{discount}% off</span>
                        <img src={cover} alt="" />
                        <div className="produect-like">
                            <label htmlFor="">0</label><br />
                            <i className='fa-regular fa-heart'></i>
                        </div>
                    </div>
                    <div className="product-details">
                        <h3>{name}</h3>
                        <div className="rate">
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                        </div>
                        <div className="product-price">
                            <h4>{price}.00</h4>
                            <button onClick={()=>addToCard(pd)}>
                                <i className='fa fa-plus'></i>
                            </button>
                        </div>
                    </div>
                </div>
              </div>            
            )
        })
    }   
     </Slider>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    </>
  )
}

export default Flashcard
