import Link from 'next/link'
// Interfaces
import { ICategory } from 'interfaces/FAQ'

interface PropsCategory {
    categories: ICategory[]
}

const Categories = (Props: PropsCategory) => {
  const categories = Props.categories.map((category: ICategory) => {
    return (
        <div key={category.slug} className="width-30% height-xxxl margin-auto margin-bottom-md border radius-md border-black flex flex-center">
          <Link href={`/faq/${category.slug}`}>
              <p className="color-inherit">{category.title}</p>
          </Link>
        </div>
    )
  }) 

  return(
      <div className="width-100% padding-lg flex flex-wrap">
        {categories}
      </div>
  )
}
export default Categories