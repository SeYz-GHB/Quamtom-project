import './App.css'
import Header from './components/Header'
import AutoCarousel from './components/AutoCarousel'
import AncientGreceD3D from './assets/HeaderImage/3Dburst.png'
function App() {
  return (
    <div className="relative flex flex-col md:items-center bg-gray-800 min-h-screen">
      {/* Left Background Image */}
      <img 
        src={AncientGreceD3D}
        alt="Left Background" 
        className="absolute left-0 w-[200px] tranform -transtateX- opacity-50 "
      />

      {/* Right Background Image */}
      <img 
        src={AncientGreceD3D}
        alt="Right Background" 
        className="absolute right-0 transform  w-[200px] opacity-50 "
      />

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center md:w-[90%] relative">
        <Header />
        <AutoCarousel /> 
      </div>
    </div>
  )
}

export default App
