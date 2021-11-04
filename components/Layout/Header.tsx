import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import Image from 'next/image'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const header = classnames(
        'width-100%',
        'height-xxxl',
        'padding-left-xl',
        'padding-top-xs',
        'flex',
        'flex-center'
    )
    const img = classnames(
        'width-20%'
    )
    const nav = classnames(
        'width-60%',
        'block',
        'margin-left-lg'
    )
    const li = classnames(
        'color-accent',
        'margin-right-md',
        'inline',
        'cursor-pointer'
    )
    const h3 = classnames(
        'width-20%',
        'color-black',
        'block'
    )

    return (
      <header className={header}>
        <Image src="/flowscape.jpg" className={img} alt="logotype" height="31.5" width="300" objectFit="contain" />
        <nav className={nav}>
          <ul>
            <li className={li}>
              <Link href={'/'} passHref>
                <a>Solutions</a>
              </Link>
            </li>
            <li className={li}>
              <Link href={'/'} passHref>
                <a>Products</a>
              </Link>
            </li>
            <li className={li}>
              <Link href={'/'} passHref>
                <a>Price</a>
              </Link>
            </li>
            <li className={li}>
              <Link href={'/faq'} passHref>
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
        </nav>
        <h3 className={h3}>Help Center</h3>
      </header>
    );
}
export default Header
