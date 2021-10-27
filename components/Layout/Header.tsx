import React from 'react'
import Link from 'next/link'
// Style
import style from './Header.module.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header>
            <div className="margin-top-xs margin-bottom-xs">
                <img className={style.logo} src="/flowscape.jpg" />
                <h3 className="color-primary padding-left-xl">FAQ, Help Center</h3>
            </div>
    
            <nav>
                <Link href={"#"}>About</Link>
                <Link href={"#"}>Products</Link>
                <Link href={"#"}>Contact</Link>
            </nav> 
        </header>
    )
}

export default Header
