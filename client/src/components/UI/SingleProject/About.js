import React from 'react'
import {BsStarFill} from 'react-icons/bs'

const About = () => {
    return (
        <div className="abt">

                <h4 className="project-title">About The Seller</h4>
                <div className="abt-header">
                    <span></span>
                    <span>
                        <p><b>Michael Aidoo</b></p>
                        <p>Graphic Design</p>
                    </span>
                    <span>
                        <p>Level 2 Seller</p>
                        <p><BsStarFill /> 4.9 (342)</p>
                    </span>
                </div>

                <div className="abt-details">
                    <span>
                        <p><b>From</b></p>
                        <p>Dansoman, Accra</p>
                    </span>
                    <span>
                        <p><b>Since</b></p>
                        <p>March 2021</p>
                    </span>
                    <span>
                        <p><b>Response Time</b></p>
                        <p>1 Hour</p>
                    </span>
                </div>

                <div className="abt-content">
                    <p> Hi, Mayur here. </p>
                    <p>
                    I am a professional graphic designer with an experience of 10+ years. 
                    Let my field of expertise collaborate with your level of imagination, 
                    so together we can create an exceptional brand image. 
                    Something which creates an impact. Impact which screams for its acknowledgment 
                    without you needing to do so. Let us make wonders together in this field of designing.
                    Keep exploring.
                    </p>
                </div>
            
        </div>
    )
}

export default About
