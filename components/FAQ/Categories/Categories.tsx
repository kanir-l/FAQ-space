import { FC, Fragment } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import style from './Categories.module.scss';

// Components
import Card from 'components/Card/Card'

// Interfaces
import { ISubCategory } from 'interfaces/FAQ';

interface PropsCategory {
  subCategories: ISubCategory[];
}

const Categories: FC<PropsCategory> = ({ subCategories }) => {
  const container = classnames(
    'width-100%',
    'height-100%',
    'padding-lg',
    'flex',
    'flex-wrap'
  );

  const categories = subCategories.map((subCategory: ISubCategory) => {
    return (
      <>
        <Card title={subCategory.category.title} description={subCategory.title} slug={subCategory.category.slug} / >
      </>
    )
  })
  
  return <div className={container}>{categories}</div>
}

export default Categories;
