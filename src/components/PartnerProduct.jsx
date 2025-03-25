import poster1 from '../assets/CardPatnerPoster/poster1.png'
import poster2 from '../assets/CardPatnerPoster/poster2.jpg'
import poster3 from '../assets/CardPatnerPoster/poster3.png'
import poster5 from '../assets/CardPatnerPoster/poster5.webp'
import poster6 from '../assets/CardPatnerPoster/poster6.png'
const PartnerProduct = () => {
    return (
        <>
            
            <div className="grid grid-cols-12 row-auto gap-2 text-black  max-w-[1315px] mx-auto ">
         
                
                
                <div className="grid grid-cols-12 md:grid-cols-6 gap-1 col-span-6">
                    <div className="md:col-span-3 col-span-6 p-1 bg-red-500">
                        <img src={poster1} alt="" className="w-full"/>
                    </div>
                    <div className="md:col-span-3 col-span-6 bg-gray-300 content-center">
                        <img src={poster3} alt="" className="w-full"/>
                    </div>
                </div>

                <div className="col-span-6 row-span-2  justify-items-center bg-gray-500 ">
                    <img src={poster6} alt="" className='max-h-full w-[80%]' />
                    
                    
                 </div>
                <div className="grid-cols-6 col-span-6 grid  row-auto ">
                    
                    <div className="col-span-6 border-2 border-white content-end">
                        <img src={poster5} alt="Rog bag" />
                    </div>
                    
                    
                    
                </div>

                    
                


            </div>
        </>
       

    )
};
export default PartnerProduct;