import Quantom from '../assets/HeaderImage/Quantom.png';
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from "react"; // Import useEffect for scroll event listener
import { Link, useNavigate } from 'react-router-dom';
import Quantity from '../assets/HeaderImage/Quantity.png';
import { data } from '../data/LuxaryProuducts';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate(); // Add useNavigate hook for programmatic navigation

  const searchChoice = [
    {
      title: "TRENDING SEARCHES",
      items: ["Hoodies", "T-shirts", "Bags"], // Added T-shirts
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

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  // Handle click on search items
  const handleItemClick = (item) => {
    setIsSearchOpen(false); // Close the search dropdown
    setSearchTerm(''); // Clear the search term

    // Navigate based on clicked item
    switch (item.toLowerCase()) {
      case 'hoodies':
        navigate('/hoodies');
        break;
      case 't-shirts':
        navigate('/tshirts'); // Note: using "tshirts" without hyphen for path consistency
        break;
        case 'bags':
          navigate('/bags'); // Note: using "tshirts" without hyphen for path consistency
          break;
      // Add more cases for other items if needed
      default:
        // For items without specific routes, do nothing or add default navigation
        break;
    }
  };

  const getFilteredItems = () => {
    if (searchTerm.trim() === '') {
      return searchChoice;
    }

    const filteredProducts = Object.values(data).filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredProducts.length > 0) {
      return [{
        title: "SEARCH RESULTS",
        items: filteredProducts.map(item => item.name)
      }];
    }

    return [{
      title: "SEARCH RESULTS",
      items: ["No products found"]
    }];
  };

  // Add scroll event listener to close the dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isSearchOpen) {
        setIsSearchOpen(false); // Close the dropdown when scrolling
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSearchOpen]);

  return (
    <header className="flex flex-row justify-between items-center px-5 py-3 h-12 w-full md:w-[90%] sticky top-0 bg-white z-50">
      <div className="flex flex-row gap-10 items-center">
        <Link to="/">
          <img src={Quantom} alt="Logo" className="w-[30px] scale-x-[-1] cursor-pointer" />
        </Link>

        <ul className="flex-row gap-10 items-center text-b font-[400] hidden md:inline-flex cursor-pointer">
          <Link to='partnership'>
            <li>Partner-ship</li>
          </Link>
          <Link to='about-Us'>
            <li>About-Us</li>
          </Link>
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
              value={searchTerm}
              onChange={handleSearch}
              type="text"
              className="w-full text-gray-600 focus:outline-none font-semibold"
              placeholder="Search"
            />
          </div>

          {getFilteredItems().map((data, index) => (
            <div key={index} className="mt-2">
              <p className="font-semibold text-gray-700 text-sm">{data.title}</p>
              <ul>
                {data.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="py-1 text-sm text-gray-600 hover:text-black cursor-pointer"
                    onClick={() => handleItemClick(item)} // Add click handler
                  >
                    {data.title === "TRENDING SEARCHES" && (
                      <div className="flex flex-row items-center gap-2">
                        <IoSearchOutline />{item}
                      </div>
                    )}
                    {data.title === "SEARCH RESULTS" && (
                      <div className="flex flex-row items-center gap-2">
                        <IoSearchOutline />{item}
                      </div>
                    )}
                    {data.title !== "TRENDING SEARCHES" && data.title !== "SEARCH RESULTS" && (
                      <div className="flex flex-row">{item}</div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link to="/login">
          <CgProfile className="text-[25px] cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default Header;