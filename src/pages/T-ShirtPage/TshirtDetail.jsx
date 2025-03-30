import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data} from "../../data/datas"; 
import CardsRow1 from "../../components/HomepageComponent/CardRow1/CardsRow1";

const TshirtDetail = () => {
  const { id } = useParams();
  const Tshirt = Object.values(data).find((item) => item.id === id);
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(Tshirt.colors[0]);

  if (!Tshirt) {
    return <div className="text-center text-2xl text-red-500">Tshirt not found</div>;
  }

  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-6 w-full">
      <div className="flex flex-col md:flex-row items-center justify-center p-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Tshirt.img}
            alt={Tshirt.name}
            className="w-[80%] md:w-[60%] transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 space-y-4">
          <h1 className="text-3xl font-semibold">{Tshirt.name}</h1>
          <p className="text-gray-400">{Tshirt.description}</p>
          <p> <span className="font-semibold">Material:</span> {Tshirt.materials.join(", ")} </p>
          <p> <span className="font-semibold">Color:</span> {selectedColor} </p>
          <p> <span className="font-semibold">Logo Placement:</span> {Tshirt.logoPlacement} </p>
          <p> <span className="font-semibold">Price:</span> ${Tshirt.price} </p>
          
          <label htmlFor="size" className="font-semibold">Choose a size: </label>
          <select id="size" name="size" className="border-1 border-black focus:outline-none">
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="extra_large">XL</option>
            <option value="double_extra_large">XXL</option>
          </select>

          <p className="italic text-gray-300">{Tshirt.details}</p>

          <div className="flex space-x-4 mt-4">
            <button className="border-2 border-black text-black px-6 py-3 shadow-md hover:bg-black hover:text-white transition duration-300 cursor-pointer">
              Add to Cart
            </button>
            <button
              className="border-2 border-black px-6 py-3 shadow-md hover:bg-black hover:text-white transition duration-300"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div >
      <div className="hidden md:inline-block md:max-w-4xl p-6 ">
      <CardsRow1 data={data}/>
      </div>
    </div>
  );
};

export default TshirtDetail;