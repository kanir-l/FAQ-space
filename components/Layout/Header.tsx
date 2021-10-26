import React from 'react'
import Link from 'next/link'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header>
            <div className="Logo">
                <h1>FAQ, Help Center</h1>
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
