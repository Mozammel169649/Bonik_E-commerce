import './App.css';
import Hader from './component/hader/Hader';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Pages from './pages/Pages';
import Data from './flashDeals/Data';
import { createContext, useState } from 'react';
import Card from './card/Card';
import Sdata from './shop/Sdata';
import Footer from './component/footer/Footer'
import { useEffect } from 'react';
import Error from './component/Error';

export const CategoryContext = createContext();


const cartFromLocalStorage = JSON.parse(localStorage.getItem("cardItem") || "[]")

function App() {
  const {productItems}=Data;
  const {shopItems}=Sdata;
  const [cardItem, setCardItem]=useState(cartFromLocalStorage);
  
  useEffect(()=>{
    localStorage.setItem("cardItem", JSON.stringify(cardItem));
  },[cardItem])

  const addToCard = (product) =>{
    const productExit = cardItem.find((item)=>item.id === product.id)
    if(productExit){
      setCardItem(cardItem.map((item)=>item.id === product.id ? {...productExit, qty: productExit.qty + 1} : item))
    }
    else{
      setCardItem([...cardItem,{...product, qty:1}])
    }    
  }
  
 const removeCart = (product) =>{
    const productExit = cardItem.find((item)=>item.id === product.id)
  
    if(productExit.qty === 1){
      setCardItem(cardItem.filter((item)=> item.id !== product.id))
    }
    else{
     setCardItem(cardItem.map((item)=>item.id === product.id ? {...productExit, qty: productExit.qty - 1}:item))
    }    
  
  }
  
 const RemovetoCart = (product) =>{
    setCardItem(cardItem.filter((item)=> item.id !== product.id))
  }

  

   
    

  return ( 
    <CategoryContext.Provider value={[cardItem, productItems, addToCard,shopItems,removeCart,RemovetoCart]}>
      <Router>
          <Hader/>
          <Switch>
            <Route path="/" exact>
              <Pages productItems={productItems} addToCard={addToCard} shopItems={shopItems}/>
            </Route>
            <Route path="/card" exact>
              <Card addToCard={addToCard} removeCart={removeCart} RemovetoCart={RemovetoCart}/>
            </Route>
            <Route path="*" exact>
              <Error/>
            </Route>
          </Switch>
          <Footer/>
      </Router>
</CategoryContext.Provider>
    
    );
}

export default App;
