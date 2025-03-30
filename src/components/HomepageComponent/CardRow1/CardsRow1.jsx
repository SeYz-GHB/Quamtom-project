import React from 'react';
import { useNavigate } from 'react-router-dom';
import EachCardRow1 from './EachCardRow1';

const CardsRow1 = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="w-[90%] flex flex-row gap-5 overflow-x-scroll">
      {Object.values(data).map((eachData) => (
        <div 
          key={eachData.id} 
          className="flex flex-col items-center flex-shrink-0 cursor-pointer"
          onClick={() => navigate(`/hoodies/${eachData.id}`)} // Navigation added here
        >
          <EachCardRow1
            img={eachData.img}
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
