import React from 'react';

const Card = ({id, name,materials,img}) => {
  return (
    <div className="  w-full flex flex-row md:flex-col items-center justify-center h-full ">
        <img src={img} alt="" className='w-[60%] h-[70%] md:w-[80%] md:h-[60%] '/>
        <div className='flex flex-col items-center'>
        <p className="font-bold line-clamp-2">{name}</p>


            <p className="font-semibold">Materials:</p>
            <p className="text-gray-400 ">{materials.join(", ")}</p>
       
            
        </div>
        
            
      
    </div>
  );
};

export default Card;
