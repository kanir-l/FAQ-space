import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
// Components 
import Articles from 'components/FAQ/Articles/Articles'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
// Services
import fetchGraphQL from 'services/contentful'
// Interfaces
import { GetArticleByGraphQL, IArticle } from 'interfaces/FAQ'


interface PropsSearch {
  searchResults: IArticle[]
}

const search: NextPage<PropsSearch> = ( {searchResults} ) => {
  const breadcrumbs = [
    <Link href={'/faq'}>faq</Link>,
    "Search results"
  ]

  return (
    <div>
        <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
        
        <p className="font-bold padding-left-xl padding-top-xl">Articles</p>
        {searchResults.length < 1 ? 
          <p className="padding-xl min-height-100vh">Articles not found</p> : 
          <Articles articles={searchResults}></Articles>
        }
    </div>
  )
}
export default search


export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchTerm = String(context.query.searchTerm)

  if (!searchTerm) {
    return {
      notFound: true
    }
  }

  const querySearch = `
  {
    articleCollection(
      where: { 
        question_contains: "${searchTerm}",
        OR: { answer_contains: "${searchTerm}" }
      }
    ) {
      items {
        question
        slug
        subCategory {
          slug
        }
        category {
          slug
        }
      }
    }
  }
  `
  
  const returnData = await fetchGraphQL<GetArticleByGraphQL>(querySearch)
  const searchResults = returnData.data.articleCollection.items

  return {
    props: {
      searchResults: searchResults,
    }
  }
} 
