import React from 'react'
import './notifications.css'
import UserPic from '../../../assets/images/users/user02.png'

const NotificationItem = () => {
    return (
        <div className='notification-item'>
            <div className='notification-item_img'>
                <img src={UserPic} alt="pic" />
            </div>

            <div className='notification-item_content'>
                <span>
                    <h4>Ralph Edwards</h4>
                    <p>5min</p>
                </span>
                <p>
                    Congrats!! Jeremiah accepted your request...
                </p>

            </div>
            
        </div>
    )
}

export default NotificationItem
