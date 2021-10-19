import type { NextPage } from 'next'
import React from 'react'
import Categories from '../components/Categories/Categories'
import SearchBar from '../components/Search/SearchBar'

const Home: NextPage = () => {

  return (
    <div>
      <div>
        <SearchBar></SearchBar>
        <Categories></Categories>
      </div>
    </div>
  )
}

export default Home
