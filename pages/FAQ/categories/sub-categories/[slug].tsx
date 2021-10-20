import type { NextPage } from 'next'
import React from 'react'
import Articles from '../../../../components/FAQ/Articles'
import { IArticle } from '../../../../interfaces/FAQ'
import fetchGraphQL from '../../../../services/contentful'

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

export async function getServerSideProps() {
  const query = `
    {
      articleCollection(limit: 20) {
        items {
          question
          answer
          slug
          category
          subCategory
        } 
      }
    }
  `
  const data = await fetchGraphQL(query)
  const articles = data.data.articleCollection.items

  /* let data = await client.getEntries({
    content_type: "article"
  }) */

  return {
    props: {
      articles: articles
    }
  }
} 