import React from 'react'
import './Category.css'
import Filter from '../../UI/Filter/Filter';
import {users} from '../../../assets/data/users.js'
import SingleCategoryItem from './SingleCategoryItem.js'

const SubCategoryPage = () => {


    const title = "Logo Design";
    
    return (
        <div className='subcategory-page'>
            
            <div className="subcategory-page_title mt5">
                <h2 className="title"> {title} </h2>
                <p className="para">Stand out from the crowd with a logo that fits your brand personality</p>
            </div>

            <div className="subcategory-page_filters mt5">
                <Filter name="Budget" />
                <Filter name="Location" />
                <Filter name="Delivery" />
                <Filter name="Sort By" />
            </div>

            <div className="subcategory-page_list">
                <h4 className="mb3 mt3 fw500">Showing {users.length} results</h4>
                <div className="subcategory-page_list-wrap">
                    {users.map((el) => {
                        return (
                            <SingleCategoryItem key={el.id} name={el.username} image={el.gallery[0]} price={el.gig.package[0].price} />
                        )
                    })}
                </div>
                
            </div>
        </div>
    );
}

export default SubCategoryPage
