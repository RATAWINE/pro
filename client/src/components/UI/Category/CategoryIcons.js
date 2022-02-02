import React from 'react'
import {MdDesignServices, MdBusinessCenter, MdNightlife} from 'react-icons/md'
import {BsFileEarmarkText} from 'react-icons/bs'
import {BiCodeBlock, BiDollarCircle} from 'react-icons/bi'
import {FaPhotoVideo, FaStore} from 'react-icons/fa'
import {GoTools} from 'react-icons/go'

const CategoryIcons = ({title, icon}) => {
    return (
        <div className="category-icons">
            <div className="category-icons-list">
                <MdDesignServices className="icon" />
                <p>Graphic & Design</p>
            </div>
            <div className="category-icons-list">
                <FaStore className="icon" />
                <p>Digital marketing</p>
            </div>
            <div className="category-icons-list">
                <BsFileEarmarkText className="icon" />
                <p>Content Writing</p>
            </div>
            <div className="category-icons-list">
                <BiCodeBlock className="icon" />
                <p>Development</p>
            </div>
            <div className="category-icons-list">

                <MdBusinessCenter className="icon" />
                <p>Business</p>
            </div>
            <div className="category-icons-list">
                <BiDollarCircle className="icon" />
                <p>Finance</p>
            </div>
            <div className="category-icons-list">
                <FaPhotoVideo className="icon" />
                <p>Video & Audio</p>
            </div>
            <div className="category-icons-list">
                <MdNightlife className="icon" />
                <p>LifeStyle</p>
            </div>
            <div className="category-icons-list">
                <GoTools className="icon" />
                <p>Handy Job</p>
            </div>
        </div>
    )
}

export default CategoryIcons
