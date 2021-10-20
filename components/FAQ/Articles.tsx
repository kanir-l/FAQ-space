import Link from 'next/link'
import { IArticle } from '../../interfaces/FAQ'

interface PropsArticle {
    articles: IArticle[]
}

const SubCategories = (Props: PropsArticle) => {
    
    const printArticles = Props.articles.map((article: IArticle) => {
        return (
          <div key={article.slug}>
                <p>{article.question}</p>
                <p>{article.answer}</p>
          </div>
        )
      }) 

    return(
        <div>
            {printArticles}
        </div>
    )
}
export default SubCategories