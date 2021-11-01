import React from 'react'


interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="width-100% position-absolute bottom-0 flex-center padding-xl padding-bottom-md">
            <h6 className="color-primary">Contact</h6>
            <div className="width-100% flex flex-center items-center">
                <span className="width-33%">Customer Service: 0123456789</span>
                <span className="width-33%">Our Head Office: 111 Sveavägen 10, Stockholm</span>
                <span className="width-33% flex justify-end">
                    <button className="btn btn--primary">Chat with us</button>
                </span>
            </div>
        </footer>
    )
}
export default Footer
