import { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import style from './Categories.module.scss';

// Interfaces
import { ISubCategory } from 'interfaces/FAQ';

interface PropsCategory {
  subCategories: ISubCategory[];
}

const Categories: FC<PropsCategory> = ({ subCategories }) => {
  const box = classnames(
    'width-30%',
    'height-xxxl',
    'margin-auto',
    'margin-bottom-md',
    'border radius-md',
    'border-black',
    'flex',
    'flex-center',
    'flex-column',
    style.colorblack
  );
  const title = classnames(
    'color-inherit',
    'cursor-pointer',
    'font-bold',
    'line-height-xl',
    style.coloraccent
  );
  const b = classnames(
    'color-inherit',
    'cursor-pointer',
    'font-light',
    'line-height-xl',
    style.coloraccent
  );
  const container = classnames(
    'width-100%',
    'height-100%',
    'padding-lg',
    'flex',
    'flex-wrap'
  );

  const categories = subCategories.map((subCategory: ISubCategory) => {
    return (
      <Link
        key={subCategory.slug}
        href={`/faq/${subCategory.category.slug}`}
        passHref
      >
        <a className={box}>
          <h3 className={title}>{subCategory.category.title}</h3>
          <strong className={b}>{subCategory.title}</strong>
        </a>
      </Link>
    );
  });

  return <div className={container}>{categories}</div>;
};
export default Categories;
