import React, {useEffect} from 'react'
import NotificationItem from '../../UI/Notification/NotificationItem'
import './user.css'

const Notifications = ({resetModal}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        resetModal()
      }, [resetModal])


    return (
        <div className='notification'>

            <h2>Transactions</h2> 

            <div className='notification_list'>
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
            </div>

            
        </div>
    )
}

export default Notifications
