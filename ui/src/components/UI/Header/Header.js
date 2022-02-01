import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux'

import { authRequest, logoutUser } from '../../Actions/actions';
import {BiMenu, BiSearch} from 'react-icons/bi'
import Navbar from './Navbar';
import {MdNotifications, MdMessage} from 'react-icons/md'
import Card from '../Card';
import NotificationItem from '../Notification/NotificationItem';
import Switch from '../Switch/Switch';

const Header = ({currentUser, authRequest, logoutUser}) => {

    const path = useLocation().pathname.split('/')[1];
    const [wait, setWait] = useState(false)
    const waitHandle = () => {
        setTimeout(()=>{
            setWait(true)
        },2000);
    }

    // this function is called when user token expires 
    useEffect(()=>{
        authRequest()
    },[authRequest])

    const renderNav = () => {
        if(currentUser){
            if(currentUser.status === 'complete'){
                return <div className="header_nav">
                             { path === 'seller' ? <Link to='/support' className="header_nav-link">Support & Help</Link>
                              : 
                                <>
                              { currentUser.seller ? 
                                <a href='/support' className="header_nav-link">Support & Help</a> : 
                                <a href='/seller' className="header_nav-link"> Sell on Amaly </a> 
                                }

                                <div className='header_nav_link_wrap'>
                                    <MdMessage className='header_nav_icon'/>
                                    <span className='header_nav_icon_ntfy'></span>
                                    <Card top="100%" right="-100%">
                                        <h3>Messages</h3>
                                        <p className='mt2'>You have no new messages</p>
                                    </Card>
                                </div> 

                                <div className='header_nav_link_wrap'>
                                    <MdNotifications className='header_nav_icon'/>
                                    <span className='header_nav_icon_ntfy'></span>
                                    <Card width='40rem' top="100%" right="-100%">
                                        <h3>Notifications</h3>
                                            <NotificationItem />
                                            <NotificationItem />
                                        <span className='base'>
                                            <Link to='/u/account/notifications' className='link'>
                                            View all notifications 
                                            </Link>
                                        </span>
                                    </Card>
                                </div> 
                                </>
                             }

                    <div className='header_nav_link_wrap'>
                        <span className='header_user_img'>{currentUser.username.charAt(0).toUpperCase()}</span>

                        {/* Popper Card */}
                        <Card top="100%" right="-30%" >
                                    <div className="header_user_popper">
                                        <img src={currentUser.photo ? `http://localhost:8000/uploads/users/${currentUser.photo}` : 'http://localhost:8000/uploads/users/blank-user.jpg'} alt="user-profile" />
                                        <h4>{currentUser.username}</h4>
                                        <p>{currentUser.email}</p>
                                    </div>
                                    <div className="header_user_popper">
                                       { currentUser.seller ? <ul>
                                            <Link className='link' to='/s/account/dashboard'><li>Dashboard</li></Link>
                                             <Link className='link' to='/s/account/settings'><li>Account Settings</li></Link>
                                            <Link className='link' to='/s/account/gigs'><li>My Gigs</li></Link>
                                            <Link className='link' to='/s/account/request'><li>Requests</li></Link>
                                            <Link className='link' to='/s/account/notifications'><li>Notifications</li></Link>
                                            <Link className='link' to='/s/account/orders'><li>My Orders</li></Link>
                                        </ul> :
                                        <ul>
                                             <Link className='link' to='/u/account/settings'><li>Account Settings</li></Link>
                                            <Link className='link' to='/u/account/payment'><li>Transactions</li></Link>
                                            <Link className='link' to='/u/account/notifications'><li>Notifications</li></Link>
                                            <Link className='link' to='/u/account/messages'><li>Messages</li></Link>
                                            <Link className='link' to='/u/account/orders'><li>My Orders</li></Link>
                                        </ul>
                                       }
                                    </div>
                                    {currentUser.seller ? <div className="header_user_popper" style={{borderBottom: '1px solid var(--border-color)'}}>
                                        <ul style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <li>Available for hire</li>
                                            <Switch />
                                            
                                        </ul>
                                    </div> : null }
                                    <div className="header_user_popper">
                                        <ul>
                                            <li>Help & Support</li>
                                            <li onClick={()=> logoutUser()}><b>Logout</b></li>
                                            
                                        </ul>
                                    </div>
                            </Card>

                    </div>
                </div>
            }
            if(currentUser.status === 'activated' || currentUser.status === 'pending'){
                return <div className="header_nav">
                            <Link to='/auth/account/validate' className="header_nav-link" >Login</Link>
                            <Link to='/auth/account/validate' className="header_nav-link">Join Us</Link>
                        </div>
            }

        }
        if(currentUser === false || currentUser === null || currentUser === {}){
                return <div className="header_nav">
                            {waitHandle()}
                            { wait ? <>
                            <Link to='/auth/login' className="header_nav-link" >Login</Link>
                            <Link to='/auth/create' className="header_nav-link join">Join Us</Link> 
                                </> : null
                            }
                       
                        </div>

            
        }
    }

    return (
        <>
            <div className="header" style={{borderBottom: path === 'seller' ? '1px solid var(--border-color)' : 'none'}}>
                <div className="header_wrapper">

                    <div className="header_brand">
                        <BiMenu className='header_brand-icon'/>
                        <a href="/" className="link"> <h3 className="header_brand-logo"> Amalyapp </h3> </a>
                    </div>

                    { path === 'seller' ? null  : <div className="header_search">
                        <form>
                            <BiSearch className="header_search-icon"/>
                            <input type="search" name="header_search" placeholder="Search for gigs/jobs"/>
                            <button type="submit">Search</button>
                        </form>
                    </div> 
                    }

                    {/* RENDERED USER NAVBAR */}
                    {renderNav()}

                 </div>

                {/* CATEGORY NAVBAR */}
                { path === 'seller' ? null : <Navbar /> }
                
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return state;
}


export default connect(mapStateToProps,{authRequest,logoutUser})(Header)
