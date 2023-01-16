import './App.css';
import Hader from './component/hader/Hader';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from './component/pages/Pages';
import Data from "./component/flashDeals/Data";
import fakeData from './fakeData';
import { createContext, useState } from 'react';
import mobile from './fakeData/android';
import Card from './component/card/Card';
import Sdata from './component/shop/Sdata';
import Footer from './component/footer/Footer'
import Contact from './component/contact/Contact';
import { useEffect } from 'react';
import Error from './component/Error';
import ViewAll from './component/view-all/ViewAll';
import FilterProduct from './component/filterPage/FilterProduct';
import ViewAllMobile from './component/viewMobile/ViewAllMobile';
import CategoryFilter from './component/categoryFilter/CategoryFilter';
import SearchItem from './component/searchItem/SearchItem';
import CardDetelse from './component/cardDetelse/CardDetelse';

export const CategoryContext = createContext();


const cartFromLocalStorage = JSON.parse(localStorage.getItem("cardItem") || "[]")

function App() {
  const {productItems}=Data;
  const [brandItem,setBrandItem]=useState(mobile);
  const [categorie,setCategorie] = useState(fakeData);
  const [item,setItem] = useState([]);
  const [searchItem,setSearchItem] = useState(fakeData);
  const {shopItems}=Sdata;
  const [cardItem, setCardItem]=useState(cartFromLocalStorage);

  console.log(item);
  
 const productDetelse =(detelse)=>{
      setItem(detelse)
      console.log(detelse);
 }
 
 console.log(setItem);

  const searchFilter =(value)=>{
    setSearchItem(fakeData.filter((e)=> e.category.toLowerCase()=== value.toLowerCase()));
    
  };

  const brandFilter = (brand) =>{
    setBrandItem(mobile.filter((e)=> e.brand === brand));  
  }
  
  const categorieFilter =(categorie) =>{
    setCategorie(fakeData.filter((e)=>e.category === categorie))
  }


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
    <CategoryContext.Provider value={[cardItem, brandItem,setBrandItem, productItems, addToCard, shopItems, removeCart, RemovetoCart]}>
      <Router>
          <Hader searchFilter={searchFilter}/>
          <Switch>
            <Route path="/" exact>
              <Pages categorieFilter={categorieFilter} productDetelse={productDetelse} productItems={productItems} addToCard={addToCard} shopItems={shopItems} brandFilter={brandFilter}/>
            </Route>
            <Route path="/card" exact>
              <Card addToCard={addToCard} removeCart={removeCart} RemovetoCart={RemovetoCart}/>
            </Route>
            <Route path="/viewAll" exact>
              <ViewAll productDetelse={productDetelse} addToCard={addToCard}/>
            </Route>
            <Route path="/filter" exact>
              <FilterProduct productDetelse={productDetelse} brandItem={brandItem} addToCard={addToCard} />
            </Route>
            <Route path="/mobile" exact>
              <ViewAllMobile productDetelse={productDetelse} addToCard={addToCard} />
            </Route>
            <Route path="/category" exact>
              <CategoryFilter productDetelse={productDetelse} categorie={categorie} addToCard={addToCard} />
            </Route>
            <Route path="/searchItem" exact>
              <SearchItem productDetelse={productDetelse} searchItem={searchItem} addToCard={addToCard} />
            </Route>
            <Route path="/item" exact>
              <CardDetelse  item={item} addToCard={addToCard} />
            </Route>
            <Route path="/contact" exact>
              <Contact />
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
