import Link from 'next/link'
import { IArticle } from '../../interfaces/FAQ'

interface PropsArticle {
    articles: IArticle[]
}

const SubCategories = (Props: PropsArticle) => {
    let printArticles = []
    
    if (Props.acticles) {
        printArticles = Props.articles.map((article: IArticle) => {
            return (
            <div key={article.slug}>
                    <b>{article.question}</b>
                    {/* <p>{article.answer}</p> */}
            </div>
            )
        })
    } 

    return(
        <div>
            {printArticles}
        </div>
    )
}
export default SubCategories