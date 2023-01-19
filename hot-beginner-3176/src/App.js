
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Banner from './Component/Banner/Banner';
import Navbar from './Component/Navbar/Navbar';
import OnlineStore from './Component/OnlineStore/OnlineStore';
function App() {
  return (
    <>
      <Banner/>
      <Navbar/>
      <OnlineStore/>
    </>
    
  );
}

export default App;
