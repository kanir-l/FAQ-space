import Link from 'next/link'
import { IArticle, ISubCategory } from 'interfaces/FAQ'
import Articles from './Articles'


interface PropsSubCategory {
    subCategories: ISubCategory[]
    articles: IArticle[]
}

const renderArticles = (subCatSlug, articles) => {
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