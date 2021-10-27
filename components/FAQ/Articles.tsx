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
            <div key={article.slug}>
                <Link href ={`/faq/${article.category.slug}/${article.subCategory.slug}/${article.slug}`}>
                    <u>{article.question}</u>
                </Link>
            </div> 
        )
    })
       
     
    return(
        <div>
            {articles}
        </div>
    )
}
export default Articles