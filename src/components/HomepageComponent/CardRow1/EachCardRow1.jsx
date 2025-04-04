import React from 'react';

const EachCardRow1 = ({id, name,materials,img}) => {
  return (
    <div className="   shadow-lg w-[180px] md:w-[250px] cursor-pointer h-[18rem] overflow-hidden">
        <div className='w-[50px]'>
          <p className='bg-red-500 text-white p-1'>new</p>
        </div>
        <div className='flex flex-col items-center justify-center p-1 h-[90%] '>
          <img src={img} alt="" className='w-[50%] h-[40%]'/>
        
          <p className="font-bold mb-2">{name}</p>
          <p className="font-semibold">Materials:</p>
          <p className="text-gray-400 mb-2">{materials.join(", ")}</p>
        </div>
            
      
    </div>
  );
};

export default EachCardRow1;
