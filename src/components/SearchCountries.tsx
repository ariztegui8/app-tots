import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoIosSearch } from "react-icons/io";

type SearchCountriesProps = {
    handleSearch: (query: string) => void;
};

const SearchCountries = ({ handleSearch }: SearchCountriesProps) => {

    const [query, setQuery] = useState('');

    const handleSearchCountries = () => {
        handleSearch(query);
    };

    return (
        <div className='relative flex items-center w-auto sm:w-full sm:max-w-xs' >
            <IoIosSearch
                color="#70757a"
                size={20}
                className='absolute right-5 cursor-pointer'
                onClick={handleSearchCountries}
            />
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar en Leaflet"
                className="border shadow-md py-1 h-11 px-14 sm:px-6 rounded-full w-full text-sm outline-none"
            />
            <FiMenu
                color="#70757a"
                size={20}
                className="flex sm:hidden absolute left-5 cursor-pointer"
            />
        </div>
    );
};

export default SearchCountries;