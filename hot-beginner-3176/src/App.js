
import './App.css';
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
function App() {
  return (
    <>
      <Banner/>
      {/* <NavbarwithInput/> */}
      <OnlineStore/>
      <Sliding/>
      <BestSeller/>
      <FiftyPerBanner/> 
      <SecondBanner/>
      <Productcarousel/>
    </>
    
  );
}

export default App;
