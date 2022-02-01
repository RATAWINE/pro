import React, { useEffect, useState } from 'react'
import SetPassword from './SetPassword'
import {connect} from 'react-redux'
import { validateUserAccount, activateUser } from '../../Actions/actions'
import Modal from '../../UI/Modal'
import './auth.css'

const ValidateAccount = ({currentUser, validateUserAccount, activateUser, modal }) => {

    const [state, setCode] = useState({code : ''});

    useEffect(()=>{
        validateUserAccount();
    },[validateUserAccount])


const activateHandle = (e) => {
    e.preventDefault();
    activateUser(state)
}

    const renderPage = () => {
        if(currentUser){
            if(currentUser.status === 'activated'){
                return <SetPassword />
            }
            if(currentUser.status === 'complete') {
                return window.location.assign('/');
            }
            
            else{
               return <div className='validate'>
                            <h2>Almost There...</h2>
                            {modal && <Modal status={modal.status} />}
                            <p>Please check your email (<b>{currentUser.email}</b>) <br/> to activate your account</p>
                            
                            <form className='validate_form' >
                                <input type="text" placeholder='Enter activation code' 
                                value={state.code} onChange={(e)=> {setCode({code : e.target.value})}}/>
                                <button className='btn' onClick={activateHandle}>Activate </button>
                            </form>
                            <hr />
                            <p>If your have not received our email in the 15minutes, <br/>please check your spam folder</p>
                        </div>

            }
        }
        return <p>redirecting...</p>
    }

    return (
        <>
           { renderPage() }

        </>

    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {validateUserAccount, activateUser})(ValidateAccount)
