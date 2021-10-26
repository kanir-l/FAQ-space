import type { NextPage } from 'next'
import React from 'react'
import Categories from 'components/FAQ/Categories'
import SearchBar from 'components/Search/SearchBar'
import  { GetCategoryByGraphQL, ICategory } from 'interfaces/FAQ'
import fetchGraphQL from 'services/contentful'

interface PropsCategory {
  categories: ICategory[]
}

const fag: NextPage<PropsCategory> = ( {categories} ) => {
  return (
    <div>
      <div>
        <SearchBar></SearchBar>
        <Categories categories={categories}></Categories>
      </div>
    </div>
  )
}

export default fag

export async function getStaticProps() {
  const queryCategory = 
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
  const returnCategories = await fetchGraphQL<GetCategoryByGraphQL>(queryCategory)
  const categories = returnCategories.data.categoryCollection.items

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


