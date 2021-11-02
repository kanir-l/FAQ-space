import Link from 'next/link'
import classnames from 'classnames'
import style from './articles.module.scss'
// Interfaces
import { IArticle } from 'interfaces/FAQ'


interface PropsArticle {
    articles: IArticle[]
}

const Articles = (Props: PropsArticle) => {
    const box = classnames(
        'width-100%'
    )
    const p = classnames(
        'margin-bottom-md',
        'cursor-pointer',
        style.underline
    )
    const container = classnames(
        'width-100%', 
        'height-100%', 
        'padding-xl'
    )

    if (!Props.articles) {
        return null
    }

    const articles = Props.articles.map((article: IArticle) => {
        return (
            <div key={article.slug} className={box}>
                <Link href ={`/faq/${article.category.slug}/${article.subCategory.slug}/${article.slug}`}>
                    <p className={p}>{article.question}</p>
                </Link>
            </div> 
        )
    })
     
    return(
        <div className={container}>
            {articles}
        </div>
    )
}
export default Articles