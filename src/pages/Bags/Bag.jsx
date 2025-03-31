import React from 'react'
import { data } from '../../data/BagsData'
import Cards from '../../components/CardsSection/Cards'


import RunningText from '../../components/RunningText'
import PremiumsHoodies from '../../components/HoodiesComponent/PremiumsHoodies'

const Bags = () => {
  return (<div>
    
    <div className='bg-gray-100 w-full flex flex-col items-center ' >
      
      <RunningText />
      <div className='w-full flex flex-col items-center'>

        <Cards data={data} basePath="bags"  />
      <PremiumsHoodies />
      </div>
      
    </div>
    
  </div>
  )
}

export default Bags;
        