import React from 'react'
import { data } from '../../data/TshirtsData'
import Cards from '../../components/CardsSection/Cards'


import RunningText from '../../components/RunningText'
import PremiumsHoodies from '../../components/HoodiesComponent/PremiumsHoodies'

const Tshirts = () => {
  return (<div>
    
    <div className='bg-gray-100 w-full flex flex-col items-center ' >
      
      <RunningText />
      <div className='w-full flex flex-col items-center'>

        <Cards data={data} basePath="Tshirts"  />
      <PremiumsHoodies />
      </div>
      
    </div>
    
  </div>
  )
}

export default Tshirts;
        