import Link from 'next/link'
import { ISubCategory } from '../../interfaces/FAQ'

interface PropsSubCategory {
    subCategories: ISubCategory[]
}

const SubCategories = (Props: PropsSubCategory) => {
    
    const printSubCategories = Props.subCategories.map((subCategory: ISubCategory) => {
        return (
          <div key={subCategory.slug}>
            <Link href={`/FAQ/categories/sub-categories/${subCategory.slug}`}>
                {subCategory.title}
            </Link>
          </div>
        )
      }) 

    return(
        <div>
            {printSubCategories}
        </div>
    )
}
export default SubCategories