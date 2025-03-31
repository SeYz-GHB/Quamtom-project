import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import RootLayout from "./Layout/RootLayout";
import HoodyLayout from "./layout/HoodyLayout";
import TshirtLayout from './layout/TshirtLayout'
import PantLayout from './layout/PantLayout'
import BagLayout from './layout/BagLayout'
import CapLayout from "./layout/CapLayout";
import Caps from "./pages/Caps/Caps";
import Hoodies from "./pages/Hoodies/Hoodies";
import HoodyDetail from "./pages/Hoodies/HoodyDetail";
import Tshirts from "./pages/T-ShirtPage/Tshirt";
import TshriteDetail from "./pages/T-ShirtPage/TshirtDetail";
import Pants from "./pages/Pants/Pant";
import PantDetail from "./pages/Pants/PantDetail";
import Bags from "./pages/Bags/Bag";
import BagDetail from "./pages/Bags/BagDetail";

import Footer from "./components/Footer";

import NotFound from "./pages/NotFoundPage";
import CapDetail from "./pages/Caps/CapDetail";
import AboutUs from "./pages/AboutUs";
import PartnerShip from "./pages/PartnerShip";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />

      <Route path="hoodies" element={<HoodyLayout/>}>
        <Route index element={<Hoodies/>}/>
        <Route path=":id" element={<HoodyDetail/>}/>
      </Route>

      <Route path="tshirts" element={<TshirtLayout/>}>
        <Route index element={<Tshirts/>}/>
        <Route path=":id" element={<TshriteDetail/>}/>
      </Route>

      <Route path="pants" element={<PantLayout/>}>
        <Route index element={<Pants/>}/>
        <Route path=":id" element={<PantDetail/>}/>
      </Route>
     
      <Route path="bags" element={<BagLayout/>}>
        <Route index element={<Bags/>}/>
        <Route path=":id" element={<BagDetail/>}/>
      </Route>
      <Route path="caps" element={<CapLayout/>}>
        <Route index element={<Caps/>}/>
        <Route path=":id" element={<CapDetail/>}/>
      </Route>
      

     
      
      <Route path="login" element={<Login />} />
      <Route path="about-us"  element={<AboutUs/>}></Route>
      <Route path="partnership"  element={<PartnerShip/>}></Route>
      <Route path="*" element={<NotFound/>} ></Route>
      


    </Route>
  )
);

const App = () => {
  return <div>
    
    <RouterProvider router={router} />
    <Footer className=' w-full'/>
  </div>;
};

export default App;
