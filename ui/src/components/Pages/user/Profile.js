import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {MdEdit} from 'react-icons/md'
import './user.css'

const Profile = ({user}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='profile'>
            
            <div className="profile_basic">
                <div className="profile_img">
                    <img src={user.photo ? `http://localhost:8000/uploads/users/${user.photo}` : 'http://localhost:8000/uploads/users/blank-user.jpg'} alt="profile-pic" />
                    <Link to='/u/account/profile'><span><MdEdit /></span></Link>
                </div>
                <span>
                    <h4>{user.username}</h4>
                    <p >{user.email}</p>
                    <Link to='/u/account/profile'><p className='mt1 profile-edit'>Edit profile</p></Link>
                </span>
            </div>

            <div className="profile_info">
                <span>
                    <p>First Name</p>
                    <p>{user.firstname ? user.firstname : '*****' }</p>
                </span>
                <span>
                    <p>Last Name</p>
                    <p>{user.lastname ? user.lastname : '*****' }</p>
                </span>
                <span>
                    <p>Phone</p>
                    <p>{user.phone ? user.phone : '*****' }</p>
                </span>
            </div>

            <div className="profile_info">
                <span>
                    <p>Account Settings </p>
                    <Link  to='/u/account/settings'><p>Edit</p></Link>
                </span>
                <span>
                    <p>Orders (4)</p>
                    <Link to='/u/account/orders'><p>View </p></Link>
                </span>
                <span>
                    <p>Transactions (3)</p>
                    <Link to='/u/account/notifications'><p>View </p></Link>
                </span>
            </div>

            <div className="profile_info">
                <span>
                    <p><BsFacebook /> Facebook</p>
                    
                </span>
                <span>
                    <p><BsInstagram /> Instagram</p>
                    
                </span>
                <span>
                    <p><BsLinkedin /> LinkedIn</p>
                    
                </span>

            </div>

            {/* <Button className='mt2' name='Edit Profile' color='var(--text-color-light)' display='inline-block'
            border='none' bgColor='var(--primary-bg-color)'
              padding='.8rem 2rem' /> */}

        </div>
    )
}

export default Profile
