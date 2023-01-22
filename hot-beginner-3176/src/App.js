
import './App.css';
import React , {useState} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Banner from './Component/Banner/Banner';
import Navbar from './Component/Navbar/Navbar';
import OnlineStore from './Component/OnlineStore/OnlineStore';
import Sliding from './Component/SlidingbarSecond/Sliding';
import { FiftyPerBanner } from './Component/FiftyPerBanner/FiftyPerBanner';

import { store } from './Redux/store/store';
import { Provider } from 'react-redux';
import NavbarList from './Component/Navbar/NavbarList';
import NavbarwithInput from './Component/Navbar/NavbarwithInput';
import SecondBanner from './Component/Second50Banner/SecondBanner';
import Productcarousel from './Component/Product/Productcarousel';
import BestSeller from "./Component/BestSeller/BestSeller"
import Header from './Component/Hrader/Header';
import AddToCart from './Component/AddToCart/AddToCart';
import CartPage from './Component/AddToCart/CartPage';


// add to cart 


function App() {
  const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

  const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			
      alert("Product alerady added")
			
			return ;
		}
		setCart([...cart, item]);
	}


  const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  
  return (
    <>
      <Banner/>
      {/* <NavbarwithInput/> */}
      <Header size={cart.length} setShow={setShow} />
      <OnlineStore/>
      <Sliding/>
      <BestSeller/>
      {/* <FiftyPerBanner/> */}
      {/* Adding Add to Cart Function  */}


      <AddToCart handleClick={handleClick}/>
      {
        show ? <CartPage cart={cart} setCart={setCart}/> :<CartPage cart={cart} setCart={setCart} handleChange={handleChange}/>
      }

      
      {/* Adding Add to Cart Function  */}
      <SecondBanner/>
      <Productcarousel/>
    </>
    
  );
}

export default App;
