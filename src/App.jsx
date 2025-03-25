import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AutoCarousel from "./components/AutoCarousel";
import BackgroundImage from "./components/BackgroundImage";
import MenuIcon from "./components/MenuIcon";
import Login from "./pages/LoginPage"; // Import Login Page
import HomePage from "./pages/HomePage";
import quanTomImage from './assets/HeaderImage/Quantom.png'
import Hoodies from "./pages/Hoodies/HoodyDetail";
import HoodyDetail from "./pages/Hoodies/HoodyDetail";
import SearchComponent from './components/Search'

function App() {
  return (
    
      
            <div className="relative flex flex-col md:items-center  min-h-screen">
     
      
              <div className="flex flex-col justify-center items-center w-full relative">
            

                
                  <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/hoodies" element={<Hoodies/>}/>
                    
                    <Route path="/login" element={<Login />} />
                  </Routes>
                  </div>
            </div>
      
  );
}

export default App;
