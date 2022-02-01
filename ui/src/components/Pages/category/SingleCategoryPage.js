import React from 'react'
import About from '../../UI/SingleProject/About'
import Description from '../../UI/SingleProject/Description'
import Faq from '../../UI/SingleProject/Faq'
import Overview from '../../UI/SingleProject/Overview'
import Packages from '../../UI/SingleProject/Packages'
import PackagesTab from '../../UI/SingleProject/PackagesTab'
import Review from '../../UI/SingleProject/Review'

const SingleCategoryPage = () => {
    return (

        <div className="single-category-page">

            <div className="single-category_nav">
                <ul>
                    <li className="active">Overview</li>
                    <li>Description</li>
                    <li>The Seller</li>
                    <li>Packages</li>
                    <li>FAQs</li>
                    <li>Reviews</li>
                </ul>
            </div>
            
            <div className="single-category_content">
                <Overview />
                <Description />
                <About />
                <Packages />
                <Faq />
                <Review />
            </div>

            <div className="single-category_purchase">
                <PackagesTab />
            </div>
            
        </div>
    )
}

export default SingleCategoryPage
