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
    'grid',
    'gap-sm',
  );

  const categories = subCategories.map((subCategory: ISubCategory) => {
    return (
          <Card title={subCategory.category.title} description={subCategory.title} slug={`/faq/${subCategory.category.slug}`} key={subCategory.category.slug} />
      )
  })
  
  return <div className={container}>{categories}</div>
}

export default Categories;
