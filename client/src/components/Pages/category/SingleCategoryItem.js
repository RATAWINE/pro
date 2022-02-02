import React from 'react'
import './Category.css'
import {FaRegHeart,FaStar} from 'react-icons/fa'
import UserPix from '../../../assets/images/users/user02.png'

const SingleCategoryItem = ({name, image, subcategory, price}) => {

    // manage favorite icon click state


    return (
        <div className="single-cat-item">
                <div className="single-cat-item_img" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}></div>
                    <div className="single-cat-item_wrap"> 
                        <div className="single-cat-item_details">
                            <div className="single-cat-item_pic">
                                <img src={UserPix} alt="" />
                            </div>
                            <div className="single-cat-item_details-title">
                                <h4>{name}</h4>
                                <p><FaStar /> 4.9(24) </p>
                            </div>
                            <FaRegHeart className='single-cat-item_details-icon' />
                        </div>
                        <p>I will create a professional minimal logo design</p>

                </div>
                <div className="single-cat-item_price"> <span>Starting at</span> GHc{price}.00</div>
        </div>
    )
}

export default SingleCategoryItem
