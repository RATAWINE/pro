import React from 'react'
import OrderNav from '../../UI/Purchase/OrderNav'
import './Purchase.css'
import {BsCheckCircleFill} from 'react-icons/bs'
import {FaPhoneAlt, FaEnvelope} from 'react-icons/fa'

const Complete = () => {
    return (
        <div className="complete">
            <OrderNav order="nav-active" complete="nav-active" />

            <div className="complete-content">

                <BsCheckCircleFill className="complete-content-icon mb3"/>
                <h4 className="project-title">Thank you for your purchase</h4>
                <p>Your order has been submitted successfully. You will receive an email from the seller shortly
                    If you dont receive an email within 24hrs, please contact our support team.
                </p>

            </div>

            <div className="complete-contact">
                    <div className="complete-contact-details">
                        <h4 className="mb2">Contact Us</h4>
                        <span>
                            <FaPhoneAlt className="icon" />
                            <p>0557228597 / 0557365615</p>
                        </span>
                        <span>
                            <FaEnvelope className="icon" />
                            <p>support@project300.com</p>
                        </span>
                    </div>

                    <div className="complete-contact-form mt2">
                        <h4 className="mb2">We are here to help</h4>
                        <form className="enquiry">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email Address" />
                            <input type="tel" placeholder="Phone number" />
                            <textarea rows="4" placeholder="How can we help?" />
                            <button className="btn">Send</button>
                        </form>
                    </div>
            </div>
            
        </div>
    )
}

export default Complete
