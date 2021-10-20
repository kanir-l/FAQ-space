import type { NextPage } from 'next'
import React from 'react'
import Categories from '../../components/FAQ/Categories'
import SearchBar from '../../components/Search/SearchBar'
import { ICategory } from '../../interfaces/FAQ'
import fetchGraphQL from '../../services/contentful'



interface PropsCategory {
  categories: ICategory[]
}

const FAQ: NextPage<PropsCategory> = ( {categories} ) => {
  return (
    <div>
      <div>
        <SearchBar></SearchBar>
        <Categories categories={categories}></Categories>
      </div>
    </div>
  )
}

export default FAQ

export async function getServerSideProps() {
  const query = 
  `
    {
      categoryCollection(limit: 20) {
        items {
          title
          slug
        } 
      }
    }
  `
  const data = await fetchGraphQL(query)
  const categories = data.data.categoryCollection.items

  /* 
  let data = await client.getEntries({
    content_type: "category"
  }) */

  return {
    props: {
      categories: categories
    }
  }
}
