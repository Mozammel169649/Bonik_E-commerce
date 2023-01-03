import { useContext } from 'react'
import { CategoryContext } from '../../App'
import './Card.css'


const Card = ({addToCard, removeCart, RemovetoCart}) => {
  const [cardItem]=useContext(CategoryContext)
  // const [cardItem, addToCard, removeCart, RemovetoCart]=useContext(CategoryContext)
  const totalPrice = cardItem.reduce((price,item)=> price + item.qty * item.price,0)
  return (
    <>
      <section className='card-items'>
        <div className="container">
          <h1 className='mtop'> Cart-item : {cardItem.length}</h1>
          <div className="d-flex background">

              <div className="item-list">
                {cardItem.length == 0 && <h1 className='no-item-card'>No item are add in card</h1>}

                {
                  cardItem.map((item)=>{
                    const cardTprice =item.price * item.qty
                    return(
                      <div className="card-item d-flex">
                        <div className="img">
                          <img src={item.cover} alt="" />
                        </div>

                        <div className="detelse">
                          <div className="title">
                            <h2>{item.name}</h2>
                            <h5>Qty : {item.qty}</h5>
                            <div className='d-flex'>
                                <h4 style={{opacity:0.8}}>{cardTprice}.00 * {item.qty}</h4>
                                <h3>${cardTprice*item.qty}.00</h3>
                            </div>
                           
                          </div>
                        </div>
                        <div className='card-item-function'>
                          <div className='removeCard' onClick={()=>RemovetoCart(item)}>
                             <button>
                                <i className='fa fa-xmark'></i>
                              </button>
                          </div>
                          <div className='card-control c-flex'>
                             <button className='incCird plus' onClick={()=>addToCard(item)}>
                                <i className='fa fa-plus'></i>
                              </button>
                              <button className='incCird minus' onClick={()=>removeCart(item)}>
                                <i className='fa fa-minus'></i>
                              </button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>


              <div className="amount">
              <h2>Cart Summary : {cardItem.length}</h2>
                <div className='price d-flex'>
                  <h4>Total Price :</h4> 
                  <h3>${totalPrice}.00</h3>
                </div>
                <div className='order' style={{marginTop:"50px",}}>
                  <button style={{width:"90%", padding:'5px 0px', background:'#e94560', color:'white', fontSize:'17px', letterSpacing:'2px', marginLeft:'5%'}}>
                    <b>TO Order</b>
                  </button>
                </div>
              </div>

          </div>
         
        </div>
      </section>
    </>
  )
}

export default Card
