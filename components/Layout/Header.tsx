import React from 'react'
import Link from 'next/link'


interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className="width-100% height-xxxl padding-left-xl paddin-top-xs flex flex-center">
            <img src = "/flowscape.jpg" className="width-20%"/>
            <nav className="width-60% block margin-left-lg">
                <Link href={'/'}><li className="color-accent margin-right-md inline">Solutions</li></Link>
                <Link href={'/'}><li className="color-accent margin-right-md inline">Products</li></Link>
                <Link href={'/'}><li className="color-accent margin-right-md inline">Price</li></Link>
                <Link href={'/faq'}><li className="color-accent margin-right-md inline">FAQ</li></Link>
            </nav> 
            <h3 className="width-20% color-black block">Help Center</h3>
        </header>
    )
}
export default Header
