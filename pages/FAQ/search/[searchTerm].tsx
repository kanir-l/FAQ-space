import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import React, { Fragment } from 'react';
import Link from 'next/link';
// Components
import Articles from 'components/FAQ/Articles/Articles';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
// Services
import fetchGraphQL from 'services/contentful';
// Interfaces
import { GetArticleByGraphQL, IArticle } from 'interfaces/FAQ';

interface PropsSearch {
  searchResults: IArticle[];
  searchTerm: string;
  error?: string;
}

const SearchResultPage: NextPage<PropsSearch> = ({
  searchResults,
  searchTerm,
  error,
}) => {
  const breadcrumbs = [<Link href={'/faq'}>faq</Link>, 'Search results'];

  return (
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} />

      {error && (
        <div>
          <p className="padding-xl min-height-100vh">{error}</p>
        </div>
      )}

      {!error && searchResults.length === 0 && (
        <div>
          <p className="padding-xl min-height-100vh">
            No articles was found with the search query{' '}
            <strong>"{searchTerm}"</strong>
          </p>
        </div>
      )}

      {searchResults.length > 1 && (
        <Fragment>
          <p className="font-bold padding-left-xl padding-top-xl">Articles</p>
          <Articles articles={searchResults} />
        </Fragment>
      )}
    </div>
  );
};

export default SearchResultPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchTerm = String(context.query.searchTerm);

  if (!searchTerm) {
    return {
      notFound: true,
    };
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
  `;

  try {
    const response = await fetchGraphQL<GetArticleByGraphQL>(querySearch);
    const searchResults = response.data.articleCollection.items;

    return {
      props: {
        searchResults: searchResults,
        searchTerm,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        searchResults: [],
        searchTerm,
        error: 'Something went wrong on our end',
      },
    };
  }
};
