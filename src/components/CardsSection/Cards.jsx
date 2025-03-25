import React from 'react';
import { data } from "../../data/datas"; // Assuming you have data in this file
import Card from './Card';

const Cards = () => {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-4 justify-items-center content-center m-4 auto-rows-auto">
      {Object.values(data).map((eachData) => (

          <Card 
            key={eachData.id}
            img={eachData.img}
            id={eachData.id} 
            name={eachData.name} 
            materials={eachData.materials} 
          />
     
      ))}
    </div>
  );
};

export default Cards;
