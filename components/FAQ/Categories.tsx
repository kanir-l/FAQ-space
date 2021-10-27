import Link from 'next/link'
// Interfaces
import { ICategory } from 'interfaces/FAQ'

interface PropsCategory {
    categories: ICategory[]
}

const Categories = (Props: PropsCategory) => {
    const categories = Props.categories.map((category: ICategory) => {
        return (
          <div key={category.slug}>
            <Link href={`/faq/${category.slug}`}>
                {category.title}
            </Link>
          </div>
        )
      }) 

    return(
        <div>
            {categories}
        </div>
    )
}

export default Categories