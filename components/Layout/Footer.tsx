import React from 'react'
import classnames from 'classnames'


interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const footer = classnames(
        'width-100%', 
        'position-relative', 
        'flex-center', 
        'padding-xl', 
        'padding-bottom-md'
    )
    const h6 = classnames(
        'color-primary'
    )
    const box = classnames(
        'width-100%',
        'flex',
        'flex-center',
        'items-center'
    )
    const span = classnames(
        'width-33%'
    )
    const lastSpan = classnames(
        'width-33%',
        'flex',
        'justify-end'
    )
    const button = classnames(
        'btn',
        'btn--primary'
    )

    return (
        <footer className={footer}>
            <h6 className={h6}>Contact</h6>
            <div className={box}>
                <span className={span}>Customer Service: 0123456789</span>
                <span className={span}>Our Head Office: 111 Sveavägen 10, Stockholm</span>
                <span className={lastSpan}>
                    <button className={button}>Chat with us</button>
                </span>
            </div>
        </footer>
    )
}
export default Footer
