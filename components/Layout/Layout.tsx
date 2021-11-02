import React from 'react'
// Components
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ( {children} ) => {
    return (
        <div>
            <Header />
            <div className="height-100%">{ children }</div>
            <Footer />
        </div>
    )
}
export default Layout
