import Link from 'next/link'
import classnames from 'classnames'
import style from './Articles.module.scss'
// Interfaces
import { IArticle } from 'interfaces/FAQ'
import { FC } from 'react'


interface PropsArticle {
    articles: IArticle[]
}

const Articles: FC<PropsArticle> = ({ articles }) => {
  const box = classnames('width-100%');
  const p = classnames('margin-bottom-md', 'cursor-pointer', style.underline);
  const container = classnames('width-100%', 'height-100%', 'padding-xl');

  if (!articles) {
    return null;
  }

  const links = articles.map((article) => {
    return (
      <div key={article.slug} className={box}>
        <Link
          href={`/faq/${article.category.slug}/${article.subCategory.slug}/${article.slug}`}
          passHref
        >
          <a className={p} data-testid="articles-a">{article.question}</a>
        </Link>
      </div>
    );
  });

  return <div className={container}>{links}</div>;
};

export default Articles