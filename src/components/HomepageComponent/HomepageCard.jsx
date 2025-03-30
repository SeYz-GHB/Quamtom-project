import React from 'react'
import { data } from "../../data/datas"; 
import Cards from '../CardsSection/Cards';
const HomepageCard = () => {
  return (
    <div>
      <Cards data={data}/>
    </div>
  )
}

export default HomepageCard
