import React from 'react'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ( {children} ) => {
    return (
        <div>
            <Header />
            { children }
            <Footer />
        </div>
    )
}

export default Layout
