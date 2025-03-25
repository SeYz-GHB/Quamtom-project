import React from 'react';

const Card = ({id, name,materials,img}) => {
  return (
    <div className="   shadow-lg w-[180px] md:w-[250px] flex flex-col items-center justify-center p-2 h-[12rem] md:h-[15rem] bg-gray-400 ">
        <img src={img} alt="" className='w-[50%] '/>
        
            <p className="font-bold ">{name}</p>
            <p className="font-semibold">Materials:</p>
            <p className="text-gray-400 ">{materials.join(", ")}</p>
            
      
    </div>
  );
};

export default Card;
