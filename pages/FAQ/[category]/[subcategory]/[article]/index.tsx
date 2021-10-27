import type { NextPage, GetStaticProps } from 'next'
import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Services
import fetchGraphQL from 'services/contentful'
// Interfaces
import { GetArticleByGraphQL, IArticle } from 'interfaces/FAQ'


interface PropsArticle {
  article: IArticle
}

const article: NextPage<PropsArticle > = ({ article }) => {
  const renderAnswer = documentToReactComponents(article.answer.json)

  if (!article) {
    return null 
  }
  return (
   <div>
     <p>{article.question}</p>
     {renderAnswer}
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
    articleCollection(where: {slug: "${articleSlugPath}"} limit:10) {
      items {
        question
        answer {
          json 
          links {
            assets {
              block {
                title
                url
              }
            }
            entries {
            inline {
              sys {
                id
              }
              ... on Article {
                 question
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