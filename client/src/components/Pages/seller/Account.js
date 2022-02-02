import React, {useState, useEffect} from 'react'
import {Link, Navigate, useLocation} from 'react-router-dom'
import {connect} from 'react-redux'

import {BiUser, BiBell} from 'react-icons/bi'
import { MdWorkOutline, MdDashboard} from 'react-icons/md'
import {RiFileListLine, RiSettings3Line} from 'react-icons/ri'
import {BsArrowRightShort, BsPlusLg} from 'react-icons/bs'
import OwlCarousel from 'react-owl-carousel'
import SellerBanner from '../../../assets/images/users/cover-image.png'
import NotificationItem from '../../UI/Notification/NotificationItem'
import './seller.css'
import Dashboard from './Dashboard'
import Notifications from './Notifications'
import Gigs from './Gigs'
import Profile from './Profile'
import Settings from './Settings'


const Account = ({currentUser}) => {

    const pathname = useLocation().pathname.split('/')[3];
    const [wait, setWait] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(()=> {
            setWait(true)
        }, 1500)

        return () => clearTimeout(timer);
    },[])

    const renderNav = () => {
        return      <>

                        <Link className='link' to='/s/account/dashboard' ><li> <MdDashboard className='s-account_nav-icon'/> Overview</li></Link>
                        <Link className='link' to='/s/account/gigs' ><li> <MdWorkOutline className='s-account_nav-icon'/> Gigs</li></Link>
                        <Link className='link' to='/s/account/notification' ><li> <BiBell className='s-account_nav-icon'/> Notifications</li></Link>
                        <Link className='link' to='/s/account/request'><li> <RiFileListLine className='s-account_nav-icon' /> My Requests</li></Link>
                        <Link className='link' to='/s/account/profile'><li> <BiUser className='s-account_nav-icon'/> Profile</li></Link>
                        <Link className='link' to='/s/account/settings' ><li> <RiSettings3Line className='s-account_nav-icon'/> Settings</li></Link>
                    </>
                    
    }

    if(currentUser && currentUser.seller){
    return (
        <div className='s-account'>
            <div className="s-account_wrap">

                <div className="s-account-2">
                    <div className="s-account-2_container">
                        <div className="s-account-2_banner" style={{backgroundImage: `url(${SellerBanner})`}}></div>
                        <div className="s-account-2_intro">
                            <span><img src={currentUser.photo ? `http://localhost:8000/uploads/users/${currentUser.photo}` : 'http://localhost:8000/uploads/users/blank-user.jpg'} alt="seller-profile" /></span>
                            <span>
                                <h3>{currentUser.firstname} {currentUser.lastname}</h3>
                                <p>Occupation</p>
                                <p className=''>{currentUser.city}, {currentUser.country}</p>
                            </span>
                            <span><button ><a href='/seller/gig/create'><BsPlusLg /> Create a Gig </a></button></span>
                            
                        </div>

                    </div>

                    {/* RENDERED NAV */}
                    <div className="s-account-2_nav mb2 mt3">
                            <OwlCarousel classID='nav-slider' items={5} autoplaySpeed={1500}
                                margin={10} loop={true} nav={true} navElement="div"
                                navText={[`<i class='fas fa-arrow-left'></i>`, `<i class='fas fa-arrow-right'></i>`]}
                                responsive={
                                    {
                                        1400 : {items : '5'},
                                        1200 : {items : '4'},
                                        760 : {items : '3'},
                                        340 : {items : '2'}
                                    }
                                }
                            >
                            {renderNav()} 
                            </OwlCarousel>
                    </div>
                    
                    
                    {/* DETAIL CONTENT */}
                    <div className="s-account-2_details">
                            {pathname === 'dashboard' ? <Dashboard user={currentUser} /> : null }
                            {pathname === 'notifications' ? <Notifications /> : null }
                            {pathname === 'gigs' ? <Gigs /> : null }
                            {pathname === 'profile' ? <Profile /> : null }
                            {pathname === 'settings' ? <Settings /> : null }
                    </div>

                </div>
                <div className="s-account-3">
                    <div className='notification s-card'>
                        <span>
                            <h3>Notifications</h3>
                           <Link className='link' to='/'><BsArrowRightShort className='fs-2' /></Link>
                        </span>
                        <NotificationItem />
                        <NotificationItem />
                    </div>

                    <div className='notification s-card'>
                        <span>
                            <h3>My Requests</h3>
                           <Link className='link' to='/'><BsArrowRightShort className='fs-2' /></Link>
                        </span>
                        <NotificationItem />
                        <NotificationItem />
                        <NotificationItem />
                    </div>
                </div>
            </div>
            
        </div>
    )}
    else{
        return <div >{ wait ? <Navigate to='/' /> : null }</div>
    }
}


const mapStateToprops = (state) => {
    return state
}

export default connect(mapStateToprops, {})(Account)
