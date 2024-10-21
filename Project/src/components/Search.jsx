import React, { useState } from 'react';

const Search = ({ handle }) => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handle(searchText);
    setSearchText(''); // Clear the input after search
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mt-5">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          className="w-full border border-blue-300 rounded-l-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <svg 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          width="20" 
          height="20" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M10.5 2a8.5 8.5 0 1 0 7.505 4.14l4.536 4.537a1.25 1.25 0 0 0 1.768-1.768l-4.536-4.537A8.5 8.5 0 0 0 10.5 2zm0 15a6.5 6.5 0 1 1 6.5-6.5 6.507 6.507 0 0 1-6.5 6.5z"/>
        </svg>
      </div>
      <button 
        type="submit" 
        className="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600 transition duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
