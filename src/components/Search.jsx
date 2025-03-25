import React, { useState } from 'react';
import { data } from '../data/datas'; 

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(Object.values(data));

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      // If search term is empty, show all items
      setFilteredData(Object.values(data));
    } else {
      const results = Object.values(data).filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(results);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for an item..."
      />
      <div>
        {filteredData.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
