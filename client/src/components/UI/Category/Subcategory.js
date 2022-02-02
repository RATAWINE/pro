import React from 'react'

const Subcategory = ({ title }) => {
    return (
        <div className="subcategory">
                <div className="subcategory_icon"></div>
                <div className="subcategory_title">
                    <h4>{title}</h4>
                </div>
        </div>
    )
}

export default Subcategory
