import Quantom from "../assets/HeaderImage/Quantom.png";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchChoice = [
    {
      title: "TRENDING SEARCHES",
      items: ["Handbags", "Shoes", "Belts"],
    },
    {
      title: "NEW IN",
      items: ["Women", "Men"],
    },
    {
      title: "FIND THE PERFECT GIFT",
      items: ["Quantom Gift", "Personalization", "Store Locator"],
    },
  ];

  return (
    <header className="flex flex-row justify-between items-center px-5 py-3 bg-white shadow-md h-12 w-full  ">
        <div className="flex flex-row gap-10 items-center">
          <img src={Quantom} alt="Logo" className="w-[30px] scale-x-[-1]  " />

          <ul className=" flex-row gap-10 items-center text-b font-[400] hidden md:inline-flex">
            <li>Partner-ship</li>
            <li>About-Us</li>
            <li>New-Arrivall</li>
          </ul>
        </div>

        <div className="flex flex-row items-center gap-5 relative">
          <IoSearchOutline 
            className="text-[25px] cursor-pointer" 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          
          <div className={`fixed top-12 bg-white shadow-lg rounded-b-md p-4 z-10 transition-all duration-500 ease-in ${
            isSearchOpen 
              ? "max-h-[calc(100vh-3rem)] opacity-100" 
              : "opacity-0 max-h-0 pointer-events-none overflow-hidden"
          } md:w-[90%] md:left-[5%] md:right-[5%] w-full left-0 right-0`}>
            <div className="flex flex-row items-center gap-2 border-b pb-2">
              <IoSearchOutline className="text-gray-400 text-xl" />
              <input
                type="text"
                className="w-full text-gray-600 focus:outline-none font-semibold"
                placeholder="Search"
              />
            </div>
            <p className="text-gray-400 text-xl mt-6">Quick Links</p>
            {searchChoice.map((data, index) => (
              <div key={index} className="mt-2">
                <p className="font-semibold text-gray-700 text-sm">{data.title}</p>
                <ul>
                  {data.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="py-1 text-sm text-gray-600 hover:text-black cursor-pointer"
                    >
                      {data.title === "TRENDING SEARCHES" && (
                        <div className="flex flex-row items-center gap-2">
                          <IoSearchOutline/>{item}
                        </div>
                      )}
                      {data.title !== "TRENDING SEARCHES" && (
                        <div className="flex flex-row">{item}</div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <MdOutlineShoppingBag className="text-[25px] cursor-pointer" />
          <CgProfile className="text-[25px] cursor-pointer"/>
        </div>
    </header>
  );
};

export default Header;