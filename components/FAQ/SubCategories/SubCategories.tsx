import { FC, Fragment } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import style from './SubCategories.module.scss';
// Interfaces
import { IArticle, ISubCategory } from 'interfaces/FAQ';

interface PropsSubCategory {
  subCategories: ISubCategory[];
  articles: IArticle[];
}

const renderArticles = (subCatSlug: string, articles: IArticle[]) => {
  const p = classnames('color-inherit', style.underline);

  const subCategoryArticles = articles.filter(
    (article) => article.subCategory.slug === subCatSlug
  );
  
  return subCategoryArticles.map((article) => {
    return (
      <Link
        key={article.slug}
        href={`/faq/${article.category.slug}/${article.subCategory.slug}/${article.slug}`}
        passHref
      >
        <a className={p} data-testid="article">
          {article.question}
        </a>
      </Link>
    );
  });
};


  const SubCategories: FC<PropsSubCategory> = ({ subCategories, articles }) => {
  const box = classnames('margin-bottom-md', 'cursor-pointer');
  const container = classnames('width-100%', 'height-100%', 'padding-xl');
  const h3 = classnames(style.underline);

  if (!subCategories) {
    return null;
  }

  const subCategoriesAndArticles = subCategories.map((subCategory: ISubCategory) => {
    const allArticles = renderArticles(subCategory.slug, articles);

    return (
      <div key={subCategory.slug} className={box}>
        <Link
          href={`/faq/${subCategory.category.slug}/${subCategory.slug}`}
          passHref
        >
          <a data-testid = "subcategory">
            <h3 className={h3}>{subCategory.title}</h3>
          </a>
        </Link>
        {allArticles}
      </div>
    );
  });

  return <div className={container}>{subCategoriesAndArticles}</div>;
};
export default SubCategories;
