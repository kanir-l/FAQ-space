import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'


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
            <img src = "/flowscape.jpg" className={img} />
            <nav className={nav}>
                <Link href={'/'}><li className={li}>Solutions</li></Link>
                <Link href={'/'}><li className={li}>Products</li></Link>
                <Link href={'/'}><li className={li}>Price</li></Link>
                <Link href={'/faq'}><li className={li}>FAQ</li></Link>
            </nav> 
            <h3 className={h3}>Help Center</h3>
        </header>
    )
}
export default Header
