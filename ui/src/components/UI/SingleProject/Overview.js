import React from 'react'
import Button from '../Button'
import './Project.css'
import {BsStarFill} from 'react-icons/bs'
import {FaHeart} from 'react-icons/fa'

const Overview = ({image}) => {
    return (
        <div className="overview">
            <h3 className="mb2">I will design 3 modern minimalist and beautiful logo designs</h3>

            <div className="overview-title mb3">
                <div className="overview-img"></div>

                <div className="overview-details">
                    <div className="overview-details-1 fx-aic mb1">
                        <p><b>Michael Addo</b></p> |
                        <p>Graphic Designer</p>
                    </div>
                    <div className="overview-details-2 fx-aic">
                        <p className="ratings fx-aic"> <BsStarFill /> 4.9 (24)</p>|
                        <p className="level">Top Seller</p>|
                        <p className="favorites fx-aic"> <FaHeart /> Favorites </p>
                    </div>
                </div>
                <div className="overview-btn">
                    <Button name="Contact Me" bgColor="var(--primary-bg-color)" color="#fff" border="none" padding="1rem 2rem" radius="6px" />

                </div>
            </div>

            <div className="overview_gallery">
                <div className="overview-gallery-preview">
                    {/* <img src={image} alt="gallery" /> */}
                </div>
                <div className="overview-gallery-list">

                </div>
            </div>

        </div>
    )
}

export default Overview
