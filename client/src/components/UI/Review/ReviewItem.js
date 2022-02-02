import React from 'react'
import {MdEdit} from 'react-icons/md'
import {BsStarFill} from 'react-icons/bs'
import UserPix from '../../../assets/images/users/user02.png'
import './review.css'

const ReviewItem = () => {
    return (
        <div className='review-item'>
                <span>
                    <img src={UserPix} alt="pic" />
                    <p><b>Micheal Aidoo</b> </p>
                    <p><BsStarFill /> (4.6) </p>
                    <span><MdEdit /> Edit</span>
                </span>
                <span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nesciunt nemo, obcaecati dignissimos harum commodi quasi, quam vel officia iusto numquam a accusamus quis enim blanditiis, hic rerum? Neque, dicta.</p>
                </span>
        </div>
    )
}

export default ReviewItem
