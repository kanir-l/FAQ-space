import Link from 'next/link'
import classnames from 'classnames'
import style from './Categories.module.scss'
// Interfaces
import { ICategory, ISubCategory } from 'interfaces/FAQ'


interface PropsCategory {
    subCategories: ISubCategory[]
}

const Categories = (Props: PropsCategory) => {
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
  )
  const h6 = classnames(
    'color-inherit', 
    'cursor-pointer',
    'font-bold',
    'line-height-xl',
    style.coloraccent
  )
  const b = classnames(
    'color-inherit', 
    'cursor-pointer',
    'font-light',
    'line-height-xl',
    style.coloraccent
  )
  const container = classnames(
    'width-100%', 
    'height-100%',
    'padding-lg', 
    'flex', 
    'flex-wrap'
  )

  const categories = Props.subCategories.map((subCategory: ISubCategory) => {
    return (
        <div key={subCategory.slug} className={box}>
          <Link href={`/faq/${subCategory.category.slug}`}>
            <h6 className={h6}>{subCategory.category.title}</h6>
          </Link>
          <Link href={`/faq/${subCategory.category.slug}/${subCategory.slug}`}>
              <b className={b}>{subCategory.title}</b>
          </Link>
        </div>
    )
  }) 

  return(
      <div className={container}>
        {categories}
      </div>
  )
}
export default Categories