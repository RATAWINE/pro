import React from 'react'
import Button from './Button'

const Banner = ({ image, title, para }) => {
    return (
        <div className="banner">
            <div className="banner_img" style={{backgroundImage:`linear-gradient(180deg, #000000b8, transparent), url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="banner_content">
                    <h3>{title}</h3>
                    <p>{para}</p>
                    <Button name="How it works" padding="1rem 2.5rem" border="1px solid #fff" radius="1rem" />
                </div>
            </div>
            
        </div>
    )
}

export default Banner
