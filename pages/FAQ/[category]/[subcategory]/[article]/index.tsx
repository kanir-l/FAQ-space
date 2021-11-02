import type { NextPage, GetStaticProps } from 'next'
import React, { useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
//Components 
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
// Services
import fetchGraphQL from 'services/contentful'
// Interfaces
import { GetArticleByGraphQL, IArticle } from 'interfaces/FAQ'


interface PropsArticle {
  article: IArticle
  subCatSlug: string
  catSlug: string,
  articleSlug: string
}

const article: NextPage<PropsArticle > = ({ article, subCatSlug, catSlug, articleSlug }) => {
  // Breadcrump
  const breadcrumbs = [
    <Link href={'/faq'}>faq</Link>,
    <Link href={`/faq/${catSlug}`}>{catSlug}</Link>,
    <Link href={`/faq/${catSlug}/${subCatSlug}`}>{subCatSlug}</Link>,
    articleSlug
  ]

  // An Article
  if (!article) {
    return null 
  }
 
  return (
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
      <div className="width-100% padding-xl">
        <p className="font-bold margin-bottom-lg">{article.question}</p>
        {documentToReactComponents(article.answer.json)}
      </div>
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
        category {
          slug
        }
        subCategory {
          slug
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
        article: article[0],
        articleSlug: articleSlug,
        subCatSlug: article[0].subCategory.slug,
        catSlug: article[0].category.slug
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