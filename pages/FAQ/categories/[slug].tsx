import type { NextPage } from 'next'
import React from 'react'
import SubCategories from '../../../components/FAQ/SubCategories'
import { ISubCategory } from '../../../interfaces/FAQ'
import fetchGraphQL from '../../../services/contentful'

interface PropsSubCategory {
  subCategories: ISubCategory[]
}

const subCategories: NextPage<PropsSubCategory> = ({ subCategories }) => {
  return (
   <div>
     <SubCategories subCategories={subCategories}></SubCategories>
   </div>
  )
}

export default subCategories

export async function getServerSideProps() {
  const query = 
  `
    {
      subCategoryCollection(limit: 20) {
        items {
          title
          slug
        } 
      }
    }
  `
  const data = await fetchGraphQL(query)
  const subCategories = data.data.subCategoryCollection.items

 /*  let data = await client.getEntries({
    content_type: "subCategory"
  }) */

  return {
    props: {
      subCategories: subCategories
    }
  }
} 