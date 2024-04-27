"use client";

import { Search, ShoppingCart, User } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

const SearchBar = () => {
  // State for the search input
  const [searchTerm, setSearchTerm] = useState('');

  // Event handler for form submission
  const handleSearch: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // Implement your search logic here
    console.log('Search Term:', searchTerm);
  };

  return (
    <div className='bg-green-600 p-4 flex justify-center items-center w-full'>
      <div className='max-w-5xl w-full flex'>
        <form onSubmit={handleSearch} className='flex-grow'>
          <label htmlFor='search' className='sr-only'>Search</label>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              id='search'
              className='pl-10 pr-4 py-2 w-full rounded-md'
              placeholder='Pesquise por Exame'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
        <button type='button' className='ml-4'>
          <ShoppingCart className='text-gray-200' />
        </button>
        <button type='button' className='ml-4'>
          <User className='text-gray-200' />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
