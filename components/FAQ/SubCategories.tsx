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
    return subCategoryArticles.map((article) => {
        return (
            <Link href={`/faq/${article.category.slug}/${article.subCategory.slug}/${article.slug}`}>
                <p className="color-inherit">{article.question}</p>
            </Link>
        )
    })
}

const SubCategories = (Props: PropsSubCategory) => {
    if (!Props.subCategories) {
        return null 
    }

    const subCategories = Props.subCategories.map((subCategory: ISubCategory) => {
        return (
            <div key={subCategory.slug} className="margin-bottom-md">
                <Link href={`/faq/${subCategory.category.slug}/${subCategory.slug}`}>
                    <h3 className="line-height-lg">{subCategory.title}</h3>
                </Link>
                {renderArticles(subCategory.slug, Props.articles)}
            </div>
        )
    }) 

    return(
        <div className="width-100% padding-xl">
            {subCategories}
        </div>
    )
}
export default SubCategories