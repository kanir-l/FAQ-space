import type { NextPage, GetStaticProps } from 'next'
import React from 'react'
import Link from 'next/link'
// Components
import Articles from 'components/FAQ/Articles/Articles'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
// Services
import fetchGraphQL from 'services/contentful'
// Interfaces
import { GetArticleByGraphQL, GetSubCategoryByGraphQL, IArticle } from 'interfaces/FAQ'


interface PropsArticle {
  articles: IArticle[]
  subCatSlug: string
  catSlug: string
}

const subCategories: NextPage<PropsArticle > = ({ articles, subCatSlug, catSlug }) => {
  // Breadcrump
  const breadcrumbs = [
    <Link key="faq-breadcrumb" href={'/faq'}>
      faq
    </Link>,
    <Link key="faq-breadcrumb-category" href={`/faq/${catSlug}`}>
      {catSlug}
    </Link>,
    subCatSlug,
  ];

  return (
   <div>
     <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
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
          slug
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
  
  const returnArticles = await fetchGraphQL<GetArticleByGraphQL>(querySubCat)
  const articles = returnArticles.data.articleCollection.items

  return {
    props: {
      articles: articles,
      subCatSlug: articles[0].subCategory.slug,
      catSlug: articles[0].category.slug
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