'use client'
import client from '@/apoloClient'
import ListCountries from '@/components/ListCountries'
import { ApolloProvider } from '@apollo/client'
import React from 'react'
import 'leaflet/dist/leaflet.css';
import Menu from '@/components/Menu'

const Home = () => {
  return (
    <ApolloProvider client={client}>
      <div className='flex h-screen overflow-hidden'>
        <div className='hidden sm:block h-screen shadow-lg bg-white w-16'>
          <Menu />
        </div>
        <div className='w-full mx-auto'>
          <ListCountries />
        </div>
      </div>
    </ApolloProvider>
  )
}

export default Home