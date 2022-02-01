import React, {useEffect, useState} from 'react'
import {useLocation, Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import { editUserProfile, editUserSettings, editUserPhoto, resetModal } from '../../Actions/actions'

import BasicProfile from './BasicProfile'
import MyOrders from './MyOrders'
import Profile from './Profile'
import Security from './Security'
import UserBanner from '../../../assets/images/users/cover-image.png'
import './user.css'
import Notifications from './Notifications'

const Account = (props) => {
    const path = useLocation().pathname.split('/')[3];
    const [wait, setWait] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(()=> {
            setWait(true)
        }, 1500)

        return ()=>clearTimeout(timer);
    },[])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])




    const renderedPage = () => {
       
            if(props.currentUser && !props.currentUser.seller){
                return <div className='user-account'>
                            <div className="user-account_banner" style={{backgroundImage: `url(${UserBanner})`}}></div>
                            <div className="user-account_nav" ></div>
                                <div className="user-account_wrap">
                                    <div className="">
                                    <Profile user={props.currentUser} />
                                    </div>
    
                                    <div className='user-account_content'>
                                    {path === 'profile' ? <BasicProfile user={props.currentUser} editUserPhoto={props.editUserPhoto} modal={props.modal} resetModal={props.resetModal} editUserProfile={props.editUserProfile}/> : null} 
                                    {path === 'orders' ? <MyOrders resetModal={props.resetModal} /> : null } 
                                    {path === 'notifications' ? <Notifications resetModal={props.resetModal} /> : null } 
                                    {path === 'settings' ? <Security user={props.currentUser} modal={props.modal} resetModal={props.resetModal} editUserSettings={props.editUserSettings}/> : null }
                                    </div>
                                </div>
    
                        </div>
            }
            return  <>
                        { wait ? <Navigate to='/' /> : null }
                    </> 
        
        
    } 

    return (
        <div>
            {
                renderedPage()
                
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {editUserProfile, editUserSettings,editUserPhoto, resetModal})(Account)
