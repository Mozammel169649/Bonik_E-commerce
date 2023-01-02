import Slider from "react-slick";
import Sdata from './Sdata'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.css'

const Slidecird = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      appendDots:(dots)=>{
        return(
          <ul style={{margin:"0px"}}>{dots}</ul>
        )
      }

    };
    return (
      <>
        <Slider {...settings}>
              {Sdata.map((value,index)=>{
                    return (
                      
                    <div className="box d-flex top" key={index}>
                        <div className="left">
                          <h2>{value.title}</h2>
                          <p>{value.desc}</p>
                          <button className='btn-primary'>Visid Collections</button>
                        </div>
                        <div className="right">
                          <img src={value.cover} alt="" />
                        </div>
                    </div>
                    
               )
           })}
       </Slider>
            </>
          );
        };


export default Slidecird


