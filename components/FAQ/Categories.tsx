import Link from 'next/link'
import { ICategory } from '../../interfaces/FAQ'

interface PropsCategory {
    categories: ICategory[]
}

const Categories = (Props: PropsCategory) => {
    
    const printCategories = Props.categories.map((category: ICategory) => {
        return (
          <div key={category.slug}>
            <Link href={`/FAQ/categories/${category.title}`}>
                {category.title}
            </Link>
          </div>
        )
      }) 

    return(
        <div>
            {printCategories}
        </div>
    )
}
export default Categories