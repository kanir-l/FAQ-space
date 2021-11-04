import Link from 'next/link'
import classnames from 'classnames'
import style from './SubCategories.module.scss'
// Interfaces
import { IArticle, ISubCategory } from 'interfaces/FAQ'



interface PropsSubCategory {
    subCategories: ISubCategory[]
    articles: IArticle[]
}

const renderArticles = (subCatSlug: string, articles: IArticle[]) => {
    const p = classnames(
        'color-inherit', 
        style.underline
    )

    const subCategoryArticles = articles.filter((article) => (article.subCategory.slug === subCatSlug))
    return subCategoryArticles.map((article) => {
        return (
            <Link href={`/faq/${article.category.slug}/${article.subCategory.slug}/${article.slug}`}>
                <p className={p}>{article.question}</p>
            </Link>
        )
    })
}

const SubCategories = (Props: PropsSubCategory) => {
    const box = classnames(
        'margin-bottom-md', 
        'cursor-pointer'
    )
    const container = classnames(
        'width-100%',
        'height-100%',
        'padding-xl'
    )
    const h3 = classnames(
        style.underline
    )

    if (!Props.subCategories) {
        return null 
    }

    const subCategories = Props.subCategories.map((subCategory: ISubCategory) => {
        return (
            <div key={subCategory.slug} className={box}>
                <Link href={`/faq/${subCategory.category.slug}/${subCategory.slug}`}>
                    <h3 className={h3}>{subCategory.title}</h3>
                </Link>
                {renderArticles(subCategory.slug, Props.articles)}
            </div>
        )
    }) 

    return(
        <div className={container}>
            {subCategories}
        </div>
    )
}
export default SubCategories