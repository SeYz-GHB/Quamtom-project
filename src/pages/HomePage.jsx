import { Routes, Route,Link} from "react-router-dom";

import Header from '../components/Header'
import AutoCarousel from '../components/AutoCarousel'
import BackgroundImage from "../components/BackgroundImage";
import MenuIcon from "../components/MenuIcon"
import Login from './LoginPage'
import quanTomImage from '../assets/HeaderImage/Quantom.png'
import CardsRow1 from "../components/CardRow1/CardsRow1";
import PartnerProduct from "../components/PartnerProduct";
import Cards from '../components/CardsSection/Cards'
const HomePage = () => {
    return (
        <>
      
      
      <div className="flex flex-col  items-center w-full ">

        <Header />
        <AutoCarousel/>
        <MenuIcon/>
        <CardsRow1/>
        <Cards/>
        <div className="bg-black w-full">
        <PartnerProduct/>
        </div>
      
        
        

    
      </div>



        </>
    )
}
export default HomePage;