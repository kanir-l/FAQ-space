import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import Articles from 'components/FAQ/Articles'
import { GetArticleByGraphQL, GetSubCategoryByGraphQL, IArticle } from 'interfaces/FAQ'
import fetchGraphQL from 'services/contentful'

interface PropsArticle {
  articles: IArticle[]
}

const subCategories: NextPage<PropsArticle > = ({ articles }) => {
  return (
   <div>
     <Articles articles={articles}></Articles>
   </div>
  )
}
export default subCategories

export const getStaticProps: GetStaticProps = async (context) => {
  const subCategorySlug = context.params?.subcategory

  if (!subCategorySlug) {
    return {
      notFound: true
    }
  }
  const subCatSlugPath = Array.isArray(subCategorySlug) ? subCategorySlug[0] : subCategorySlug

  const querySubCat = `
    {
      articleCollection(where: {subCategory: {slug:"${subCatSlugPath}"}}) {
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
  
  const returnArticles = await fetchGraphQL<GetArticleByGraphQL>(querySubCat)
  const articles = returnArticles.data.articleCollection.items

  return {
    props: {
      articles: articles
    }
  }
} 

export async function getStaticPaths() {
  const query = 
  `
    {
      subCategoryCollection {
        items {
          slug,
          category {
            slug
          }
        }
      }
    }
  `

  const returnData = await fetchGraphQL<GetSubCategoryByGraphQL>(query)
  const subCatories = returnData.data.subCategoryCollection.items


  const paths = subCatories.map(( subCategory ) => {
    return {
      params: { 
        category: subCategory.category.slug,
        subcategory: subCategory.slug,
      }
    }
  })

  return {
      paths,  
      fallback: false
  }
}