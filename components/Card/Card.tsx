import React, { FC } from 'react'
import Link from 'next/link';
import classnames from 'classnames';

// Style
import style from './Card.module.scss';

interface Props {
    title: string
    description: string
    slug: string
}

const Search: FC<Props> = ({ title, description, slug }) => {
  const card_a = classnames ('padding-sm','flex','flex-column', style['card-v14'], 'col-4@xs', 'col-4@lg'
  )
  
  return (
        <Link href={slug} passHref>
            <a className={card_a}>
                <h3 className="text-md">{title}</h3>
                <p className="color-contrast-medium line-height-md margin-y-xs">{description}</p>
                <p className="text-right color-primary margin-top-auto">Explore →</p>
            </a>
        </Link>    
  )
}

export default Search