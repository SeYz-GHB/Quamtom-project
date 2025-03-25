import Quantom from "../../assets/HeaderImage/Quantom.png";

const BrandNameHeader = ({brandName}) => {
    return (
        <div className="flex flex-col gap-1 "> 
           <div className="flex flex-row items-center gap-1 py-1 md:pl-[25%] pl-[10%]">
                <img src={Quantom} alt="" className="max-w-7"/>
                <h2 className="font-bold ">{brandName}</h2>
           </div>
           <div className="flex flex-row items-center gap-1 bg-black py-1 md:pl-[25%] pl-[10%]">
                <h2 className="font-[700] text-white ">{brandName} Account Portal</h2>
           </div>
        </div>
        
    )
}
export default BrandNameHeader;