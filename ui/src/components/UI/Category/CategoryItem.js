import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({title, image}) => {
    return (
        <Link to={`/category/${title.trim().toLowerCase()}`}>
        <div className="category-item">
            <div className="category-item_img" style={{backgroundImage:`linear-gradient(360deg, #000000b8, transparent), url(${image})`}}>
                </div>
            <h3 className="category-item_title"> {title}</h3>
        </div>
        </Link>
    )
}

export default CategoryItem
