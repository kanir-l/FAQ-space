import type { NextPage } from 'next'
import React, { ChangeEvent, useState } from 'react'
// Components
import Categories from 'components/FAQ/Categories/Categories'
import SearchBar from 'components/Search/SearchBar'
// Services
import fetchGraphQL from 'services/contentful'
// Interfaces
import  { GetSubCategoryByGraphQL, ISubCategory } from 'interfaces/FAQ'


interface PropsCategory {
  subCategories: ISubCategory[]
}

const fag: NextPage<PropsCategory> = ( {subCategories} ) => {
  const [searchQuery, setSearchQuery] = useState("")

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <div>
        <SearchBar value={searchQuery} onChange={onChange}></SearchBar>
        <Categories subCategories={subCategories}></Categories>
      </div>
    </div>
  )
}
export default fag


export async function getStaticProps() {
  const querySubCategory = 
  `
    {
      subCategoryCollection(limit: 20) {
        items {
          title
          slug
          category {
            title
            slug
          }
        } 
      }
    }
  `
  const returnSubCategories = await fetchGraphQL<GetSubCategoryByGraphQL>(querySubCategory)
  const subCategories = returnSubCategories.data.subCategoryCollection.items

  /* 
  let data = await client.getEntries({
    content_type: "category"
  }) */

  return {
    props: {
      subCategories: subCategories
    }
  }
}


