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
  const card_a = classnames ('margin-sm', 'padding-sm','flex','flex-column', style['card-v14'], 'col-6@xs', 'col-4@lg'
  )
  const card_figure = classnames (style['card-v14__icon-wrapper'], 'margin-bottom-xs')

  return (
    <div className="grid gap-sm">
        <Link href={slug} passHref>
            <a className={card_a}>
            <figure className={card_figure} aria-hidden="true">
                <rect x="1" y="1" width="10" height="10" rx="2"></rect>
                <path d="M23.428,4.618,19.381.572h0a1.957,1.957,0,0,0-2.762,0L12.572,4.618a1.959,1.959,0,0,0,0,2.764l4.047,4.047a1.957,1.957,0,0,0,2.762,0l4.047-4.046A1.959,1.959,0,0,0,23.428,4.618Z" opacity="0.5"></path>
                <rect x="13" y="13" width="10" height="10" rx="2"></rect>
                <rect x="1" y="13" width="10" height="10" rx="2"></rect>
            </figure>
                <h3 className="text-md">{title}</h3>
                <p className="color-contrast-medium line-height-md margin-y-xs">{description}</p>
                <p className="text-right color-primary margin-top-auto">Explore →</p>
            </a>
        </Link>    
    </div>
  )
}

export default Search