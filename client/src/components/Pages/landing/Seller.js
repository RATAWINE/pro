import React from 'react'
import Button from '../../UI/Button'
import Image from '../../../assets/images/users/cover-image.png'
import {MdAccountCircle, MdEditNote, MdSell} from 'react-icons/md'
import './landing.css'
import NewSeller from './NewSeller'
import { Link, useLocation } from 'react-router-dom'

const Seller = () => {

   const path = useLocation().pathname

    return (
        <div className='seller'>
        { path === '/seller' ? 
            <>
            <div className="seller-intro">
                <div className='seller-img'>
                    <img src={Image} alt="" />
                </div>
                <div className='seller-details'>
                    <h2> Simple To <br/>The Core<span>.</span> </h2>
                    <p className='mb3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Sunt deserunt dignissimos nihil blanditiis suscipit possimus assumenda doloremque adipisci commodi. 
                    </p>
                    <Link to='/seller/account'><Button name='Get Started' bgColor='var(--primary-bg-color)' 
                    border='none' textSize='1.7rem' color='var(--text-color-light)' padding='1.5rem 4rem' /></Link>
                </div>

            </div>

            <div className="seller-content">
                <h4>Become a Seller</h4>
                <h3>Connect More. Sell More.</h3>
                
                <div className="seller-content_icons">
                    <span>
                    <div className='seller-icon'><MdAccountCircle className='seller-icon_i'  /></div>
                        <h5>Register</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Sunt deserunt dignissimos.</p>
                    </span>
                    <span>
                        <div className='seller-icon'><MdEditNote className='seller-icon_i'  /></div>
                        <h5>Create a Gig</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Sunt deserunt dignissimos.</p>
                    </span>
                    <span>
                    <div className='seller-icon'><MdSell className='seller-icon_i'  /></div>
                        <h5>Start Selling</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Sunt deserunt dignissimos.</p>
                    </span>
                    
                </div>
            </div>
            </> : null }

            {/* CREATE ACCOUNT */}
           { path === '/seller/account' ? <NewSeller /> : null }

        </div>
    )
}

export default Seller
