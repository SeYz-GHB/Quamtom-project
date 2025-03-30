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
import Footer from "./components/Footer";
import Tshirt from "./pages/T-ShirtPage/Tshirt";
import TshriteDetail from "./pages/T-ShirtPage/TshirtDetail";
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
      <Route path="pants" element={<PantLayout/>}></Route>
      <Route path="bags" element={<BagLayout/>}></Route>
      <Route path="caps" element={<CapLayout/>}></Route>
      
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
