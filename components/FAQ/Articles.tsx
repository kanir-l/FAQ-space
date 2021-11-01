import Link from 'next/link'
import { IArticle } from 'interfaces/FAQ'

interface PropsArticle {
    articles: IArticle[]
}

const Articles = (Props: PropsArticle) => {
    if (!Props.articles) {
        return null
    }

    const articles = Props.articles.map((article: IArticle) => {
        return (
            <div key={article.slug} className="width-100%">
                <Link href ={`/faq/${article.category.slug}/${article.subCategory.slug}/${article.slug}`}>
                    <p className="margin-bottom-md">{article.question}</p>
                </Link>
            </div> 
        )
    })
     
    return(
        <div className="width-100% padding-xl">
            {articles}
        </div>
    )
}
export default Articles