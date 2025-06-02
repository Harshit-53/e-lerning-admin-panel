import { SearchIcon } from 'lucide-react';
import React from 'react';

const Searchbar = () => {
  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center bg-customgrey rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400 relative">
        <input
          type="text"
          placeholder="Search"
          aria-label="Search"
          className="bg-transparent w-full outline-none px-2 text-sm placeholder-customgrey"
        />
        <SearchIcon/>
        
      </div>
    </div>
  );
};

export default Searchbar;
