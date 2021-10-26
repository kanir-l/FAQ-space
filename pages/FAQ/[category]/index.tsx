import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import SubCategories from 'components/FAQ/SubCategories'
import Articles from 'components/FAQ/Articles'
import { ISubCategory, IArticle, GetSubCategoryByGraphQL, GetArticleByGraphQL, GetCategoryByGraphQL } from 'interfaces/FAQ'
import fetchGraphQL from 'services/contentful'

interface Props {
  subCategories: ISubCategory[]
  articles: IArticle[]
}

const categories: NextPage<Props> = ({subCategories, articles}) => {
  return (
   <div>
      <SubCategories subCategories={subCategories} articles={articles}></SubCategories>
   </div>
  )
}
export default categories

export const getStaticProps: GetStaticProps = async (context) => {
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
          title
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
          answer
          slug
          category {
            title
            slug
          }
          subCategory {
            title
            slug
            category {
              title
              slug
            }
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
      articles: articles   
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
 