import { FC } from 'react'
import classnames from 'classnames';

// Style
import style from './Card.module.scss';

interface Props {
    title: string
    description: string
    slug: string
}

const Search: FC<Props> = ({ title, description, slug }) => {
    const box = classnames('width-30%', 'height-xxxl', 'margin-auto', 'margin-bottom-md','border radius-md','border-black', 'flex', 'flex-center', 'flex-column', style.boxcolor)
    const link = classnames('card-v14','padding-sm','flex','flex-column','col-6@xs','col-4@lg')
    const heading = classnames('color-inherit','cursor-pointer', style.fontcolor);
    const paragraph = classnames('color-inherit', 'cursor-pointer', 'font-light', 'line-height-xl', style.fontcolor);
    
  return (
    <div className={box}>
        <a className={link} href={`/faq/${slug}`}>
            <h3 className={heading}>{title}</h3>
            <p className={paragraph}>{description}</p>
        </a>
    </div>    
  )
}

export default Search