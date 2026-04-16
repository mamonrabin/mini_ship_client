import { Search } from 'lucide-react';
import React from 'react';

const SearchForm = () => {
    return (
        <div className="relative">
          <form className="xl:w-162.5 lg:w-150 w-full bg-white text-black border rounded flex items-center justify-between px-4 lg:py-3 py-2">
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Search for products, brands and more"
            />
            <Search size={20} className='font-bold text-[#1299E8]' />
          </form>
        </div>
    );
};

export default SearchForm;