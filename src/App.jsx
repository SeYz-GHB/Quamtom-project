import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import RootLayout from "./Layout/RootLayout";
import HoodyLayout from "./layout/HoodyLayout";
import TshirtLayout from './layout/TshirtLayout'
import PantLayout from './layout/PantLayout'
import BagLayout from './layout/BagLayout'
import CapLayout from "./layout/CapLayout";

import Hoodies from "./pages/Hoodies/Hoodies";
import HoodyDetail from "./pages/Hoodies/HoodyDetail";
import Tshirt from "./pages/T-ShirtPage/Tshirt";
import TshriteDetail from "./pages/T-ShirtPage/TshirtDetail";
import Pant from "./pages/Pants/Pant";
import PantDetail from "./pages/Pants/PantDetail";
import Bag from "./pages/Bags/Bag";
import BagDetail from "./pages/Bags/BagDetail";
import Cap from "./pages/Cap/Cap";
import CapDetail from "./pages/Cap/CapDetail";
import Footer from "./components/Footer";

import NotFound from "./pages/NotFoundPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />

      <Route path="hoodies" element={<HoodyLayout/>}>
        <Route index element={<Hoodies/>}/>
        <Route path=":id" element={<HoodyDetail/>}/>
      </Route>

      <Route path="tshirts" element={<TshirtLayout/>}>
        <Route index element={<Tshirt/>}/>
        <Route path=":id" element={<TshriteDetail/>}/>
      </Route>

      <Route path="pants" element={<PantLayout/>}>
        <Route index element={<Pant/>}/>
        <Route path=":id" element={<PantDetail/>}/>
      </Route>
     
      <Route path="bags" element={<BagLayout/>}>
        <Route index element={<Bag/>}/>
        <Route path=":id" element={<BagDetail/>}/>
      </Route>
      

      <Route path="caps" element={<CapLayout/>}>
        <Route index element={<Cap/>}/>
        <Route path=":id" element={<CapDetail/>}/>
      </Route>
      
      <Route path="login" element={<Login />} />
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
