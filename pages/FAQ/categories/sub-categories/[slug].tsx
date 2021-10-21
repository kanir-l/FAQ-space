import type { NextPage } from 'next'
import React from 'react'
import Articles from 'components/FAQ/Articles'
import { IArticle } from 'interfaces/FAQ'
import fetchGraphQL from 'services/contentful'

interface PropsArticle {
  articles: IArticle[]
}

const articles: NextPage<PropsArticle > = ({ articles }) => {
  
  return (
   <div>
     <Articles articles={articles}></Articles>
   </div>
  )
}

export default articles

export async function getServerSideProps(context) {
  const subCategorySlug = context.query.slug
  console.log(subCategorySlug)
  const query = `
    {
      articleCollection(where: {subCategory: {slug:"${subCategorySlug}"}}) {
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

  const data = await fetchGraphQL(query)
  const articles = data.data.articleCollection.items

  return {
    props: {
      articles: articles
    }
  }
} 