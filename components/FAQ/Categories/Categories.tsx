import { FC, Fragment } from 'react';
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
    'padding-lg',
    'flex-center',
    'flex-wrap'
  );

  const categories = subCategories.map((subCategory: ISubCategory) => {
    return (
        <div key={subCategory.category.slug}>
          <Card title={subCategory.category.title} description={subCategory.title} slug={`/faq/${subCategory.category.slug}`} / >
        </div>
      )
  })
  
  return <div className={container}>{categories}</div>
}

export default Categories;
