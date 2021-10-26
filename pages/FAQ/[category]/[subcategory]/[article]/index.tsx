import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import Articles from 'components/FAQ/Articles'
import { GetArticleByGraphQL, IArticle } from 'interfaces/FAQ'
import fetchGraphQL from 'services/contentful'

interface PropsArticle {
  article: IArticle
}

const article: NextPage<PropsArticle > = ({ article }) => {
  if (!article) {
    return null 
  }
  return (
   <div>
     <p>{article.question}</p>
     <p>{article.answer}</p>
   </div>
  )
}

export default article

export const getStaticProps: GetStaticProps = async (context) => {
  const articleSlug = context.params?.article 
  if (!articleSlug) {
    return {
      notFound: true
    }
  }
  const articleSlugPath = Array.isArray(articleSlug) ? articleSlug[0] : articleSlug
  
  const queryArticle = `
    {
      articleCollection(where: {slug: "${articleSlugPath}"}) {
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
  const article = returnArticles.data.articleCollection.items

  if ( !article || article.length === 0 ) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        article: article[0]
      }
    }
  }
} 

export async function getStaticPaths() {
  const query = 
  `
    {
      articleCollection {
        items {
          slug,
          category {
            slug
          },
          subCategory {
            slug
          }
        }
      }
    }
  `
  const returnData = await fetchGraphQL<GetArticleByGraphQL>(query)
  const articles = returnData.data.articleCollection.items
  const paths = articles.filter((article) => (article.category && article.subCategory)).map(( article ) => {
    return {
      params: { article: article.slug, category: article.category.slug, subcategory: article.subCategory.slug }
    }
  })

  return {
      paths, 
      fallback: false
  }
}