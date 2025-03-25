import React from 'react';
import { data } from "../../data/datas"; // Assuming you have data in this file
import EachCardRow1 from './EachCardRow1';

const CardsRow1 = () => {
  return (
    <div className="w-[90%] flex flex-row   gap-5 overflow-x-scroll " >
      {Object.values(data).map((eachData) => (
        <div className="flex flex-col items-center  " >
          
          <EachCardRow1
            key={eachData.id}
            img = {eachData.img}
            id={eachData.id} 
            name={eachData.name} 
            materials={eachData.materials} 
          />
          
        </div>
      ))}
    </div>
  );
};

export default CardsRow1;
