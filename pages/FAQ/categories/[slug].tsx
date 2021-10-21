import type { NextPage } from 'next'
import React from 'react'
import SubCategories from 'components/FAQ/SubCategories'
import { ISubCategory } from 'interfaces/FAQ'
import fetchGraphQL from 'services/contentful'

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

export async function getStaticProps(context) {

  const categorySlug = context.params.slug
  console.log(categorySlug)  
  //const categorySlug = context.query.slug
  const query = 
  `
  {
    subCategoryCollection(where: {category: {slug:"${categorySlug}"}}) {
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
  const data = await fetchGraphQL(query)
  const subCategories = data.data.subCategoryCollection.items

  return {
    props: {
      subCategories: subCategories
    }
  }
} 

export async function getStaticPaths() {
  const query = 
  `
    {
      subCategoryCollection {
        items {
          slug
        } 
      }
    }
  `
  const data = await fetchGraphQL(query)
  const subCategories = data.data.subCategoryCollection.items

  const paths = subCategories.map(( {slug} ) => {
    return {
      params: { slug }
    }
  })

  return {
      paths, 
      fallback: true
  }
}
 