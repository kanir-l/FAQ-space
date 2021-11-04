import type { NextPage } from 'next'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router';

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

const FaqStartPage: NextPage<PropsCategory> = ({ subCategories }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Remove any leading or trailing whitespaces from the search query
    const withoutSpaces = searchQuery.trim();
    
    // Only send the user to the search result page if there is an actual search query
    if (withoutSpaces.length > 0) {
      router.push(`/faq/search/${withoutSpaces}`);
    }
  }

  return (
    <div>
      <div>
        <SearchBar
          value={searchQuery}
          onChange={onChange}
          onSubmit={handleOnSubmit}
        />
        <Categories subCategories={subCategories} />
      </div>
    </div>
  );
}

export default FaqStartPage;


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


