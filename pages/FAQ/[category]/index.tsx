import type { NextPage, GetStaticProps } from 'next'
import React, { useState } from 'react'
import Link from 'next/link'
// Components
import SubCategories from 'components/FAQ/SubCategories/SubCategories'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
// Services
import fetchGraphQL from 'services/contentful'
// Interfaces
import { ISubCategory, IArticle, GetSubCategoryByGraphQL, GetArticleByGraphQL, GetCategoryByGraphQL } from 'interfaces/FAQ'


interface Props {
  subCategories: ISubCategory[]
  articles: IArticle[]
  catSlug: string
}

const category: NextPage<Props> = ({subCategories, articles, catSlug}) => {
  // Breadcrumbs
  const breadcrumbs = [
    <Link key="faq-breadcrumb" href={'/faq'}>
      faq
    </Link>,
    catSlug,
  ];

  return (
   <div>
      <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
      <SubCategories subCategories={subCategories} articles={articles}></SubCategories>
   </div>
  )
}
export default category


export const getStaticProps: GetStaticProps = async (context) => {
  //Sub-categories
  const categorySlug = context.params?.category 
  if (!categorySlug) {
    return {
      notFound: true
    }
  }
  const categorySlugPath = Array.isArray(categorySlug) ? categorySlug[0] : categorySlug

  const querySubCat = 
  `
  {
    subCategoryCollection(where: {category: {slug:"${categorySlugPath}"}}) {
      items {
        title
        slug
        category {
          slug
        }
      }
    }
  }
` 

  const returnSubCats = await fetchGraphQL<GetSubCategoryByGraphQL>(querySubCat)
  const subCategories = returnSubCats.data.subCategoryCollection.items

  //Articles
  const subCategorySlugs = subCategories.map((subCategory) => {
    return subCategory.slug
  })

  const subCategorySelectors = subCategorySlugs.map(subcat => `{slug:"${subcat}"}`)

  const queryArticle = `
    {
      articleCollection(where: {subCategory: {OR: [${subCategorySelectors.join(", ")}]}}) {
        items {
          question
          
          slug
          category {
            title
            slug
          }
          subCategory {
            title
            slug
          }
        }
      }
    }
  `
 
  const returnArticles = await fetchGraphQL<GetArticleByGraphQL>(queryArticle)
  const articles = returnArticles.data.articleCollection.items 

  return {
    props: {
      subCategories: subCategories,
      articles: articles,
      catSlug: subCategories[0].category.slug   
    }
  }
} 

export async function getStaticPaths() {
  const query = 
  `
    {
      categoryCollection {
        items {
          slug
        } 
      }
    }
  `
  const returnData = await fetchGraphQL<GetCategoryByGraphQL>(query)
  const categories = returnData.data.categoryCollection.items
  const paths = categories.map(( category ) => {
    return {
      params: { 
        category: category.slug 
      }
    }
  })

  return {
      paths, 
      fallback: false
  }
}
 