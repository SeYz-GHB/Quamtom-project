import React from 'react'
import { data } from '../../data/HoodiesData'
import Cards from '../../components/CardsSection/Cards'

import AutoCarousel from '../../components/HoodiesComponent/AutoCarouselHoodies'
import RunningText from '../../components/RunningText'
import PremiumsHoodies from '../../components/HoodiesComponent/PremiumsHoodies'
PremiumsHoodies

const Tshirt = () => {
  return (<div>
    
    <div className='bg-gray-100 w-full flex flex-col items-center ' >
      {/* <AutoCarousel />
      <RunningText /> */}
      <div className='w-full flex flex-col items-center'>
        TshirtPage

       {/*  <Cards data={data}/>
      <PremiumsHoodies /> */}
      </div>
      
    </div>
    
  </div>
  )
}

export default Tshirt;
        