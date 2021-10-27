import Link from 'next/link'
// Components
import Articles from './Articles'
// Interfaces
import { IArticle, ISubCategory } from 'interfaces/FAQ'



interface PropsSubCategory {
    subCategories: ISubCategory[]
    articles: IArticle[]
}

const renderArticles = (subCatSlug: string, articles: IArticle[]) => {
    const subCategoryArticles = articles.filter((article) => (article.subCategory.slug === subCatSlug))
    return <Articles articles={subCategoryArticles}></Articles>
}

const SubCategories = (Props: PropsSubCategory) => {
    if (!Props.subCategories) {
        return null 
    }

    const subCategories = Props.subCategories.map((subCategory: ISubCategory) => {
        return (
            <div key={subCategory.slug}>
                <Link href={`/faq/${subCategory.category.slug}/${subCategory.slug}`}>
                    <h3>{subCategory.title}</h3>
                </Link>
                {renderArticles(subCategory.slug, Props.articles)}
            </div>
        )
    }) 

    return(
        <div>
            {subCategories}
        </div>
    )
}

export default SubCategories