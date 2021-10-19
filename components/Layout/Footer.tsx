import React from 'react'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer>
            <h1>Contact</h1>
            <div>
                <span>Customer Service: 0123456789</span>
                <span>Our Head Office: 111 Sveavägen 10, Stockholm</span>
                <span>Chat with us</span>
            </div>
        </footer>
    )
}

export default Footer
