import { Country, GetCountries } from '@/types';
import { gql, useQuery } from '@apollo/client';
import jsonCountries from '../data/countries.json';
import Maps from './Maps';
import React, { useState } from 'react';
import SearchCountries from './SearchCountries';
import { ClipLoader } from 'react-spinners';


const ListCountries = () => {

  const [filterCountries, setFilterCountries] = useState<GetCountries['countries']>([]);
  const [errorCoord, setErrorCoord] = useState(false);

  const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
    }
  }
`;

  const { loading, error, data } = useQuery<GetCountries>(GET_COUNTRIES);

  const countriesCoord = (filterCountries.length > 0 ? filterCountries : data?.countries || []).map((country) => {
    const coords = jsonCountries.find((data) => data['ISO Code'] === country.code);
    if (!coords) {
      return null;
    }
    return {
      name: country.name,
      code: country.code,
      latitude: coords.Latitude,
      longitude: coords.Longitude,
    };
  }).filter(country => country !== null);

  const handleSearch = (query: string) => {
    if (data?.countries) {
      const filter = data.countries.filter((country) =>
        country.name.toLowerCase().includes(query.toLowerCase().trim()) ||
        country.code.toLowerCase().includes(query.toLowerCase().trim())
      );

      const noCoord = filter.every((country) => {
        const coords = jsonCountries.find((data) => data['ISO Code'] === country.code);
        return !coords;
      });

      setErrorCoord(noCoord);

      setTimeout(() => {
        setErrorCoord(false);
      }, 4000);

      setFilterCountries(filter);
    }
  };

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className='relative'>
      {loading ?
        <div className='text-center py-20'>
          <ClipLoader
            size={40}
            color='#70757a'
          />
        </div>
        :
        <div>
          <div className='absolute p-[10px] top-0 left-[60px] z-[1000] w-auto sm:w-full sm:max-w-xs'>
            <SearchCountries handleSearch={handleSearch} />
            {errorCoord && <p className='text-red-500 text-sm text-center'>No hay coordenadas de ese país</p>}
          </div>
          <Maps countries={countriesCoord as Country[]} />
        </div>
      }
    </div >
  );
};

export default ListCountries;