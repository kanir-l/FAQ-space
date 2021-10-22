import type { NextPage } from 'next'
import React from 'react'
import SubCategories from 'components/FAQ/SubCategories'
import Articles from 'components/FAQ/Articles'
import { ISubCategory } from 'interfaces/FAQ'
import fetchGraphQL from 'services/contentful'

interface Props {
  subCategories: ISubCategory[],
  articles: IArticle[]
}

const subCategories: NextPage<Props> = ({subCategories, articles}) => {
  let printQuestions = []

  if (articles) {
    printQuestions = articles.map((article) => {
      return article.question
    })
  }
  
  return (
   <div>
     <SubCategories subCategories={subCategories}></SubCategories>
     <p>{printQuestions}</p>
   </div>
  )
}

export default subCategories

export const getStaticProps: GetStaticProps = async (context) => {
  const categorySlug = context.params.slug
  //const categorySlug = context.query.slug
  const querySub = 
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
  const resultSubCategory = await fetchGraphQL(querySub)
  const subCategories = resultSubCategory.data.subCategoryCollection.items

  const subCategorySlug = subCategories.map((subCategory) => {
    return subCategory.slug
  })
 
  const queryArticle = `
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

  const resultArticle = await fetchGraphQL(queryArticle)
  const articles = resultArticle.data.articleCollection.items

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

 