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
  const cardA = classnames ('padding-sm','flex','flex-column', style['card-v14'], 'col-4@xs', 'col-4@lg'
  )
  
  return (
        <Link href={slug} data-testid="card-link" passHref>
            <a className={cardA} data-testid="card-a">
                <h3 className="text-md" data-testid="card-h3">{title}</h3>
                <p className="color-contrast-medium line-height-md margin-y-xs" data-testid="card-p">{description}</p>
                <p className="text-right color-primary margin-top-auto" data-testid="card-p">Explore →</p>
            </a>
        </Link>    
    )
}

export default Search