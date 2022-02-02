import React, {useEffect, useReducer, useState} from 'react'
import Modal from '../../UI/Modal'
import './user.css'

const Security = ({user, editUserSettings, modal, resetModal}) => {

    const [valid, setValid] = useState(false);
    const validate = (a, b) => a === b ;

    useEffect(() => {
        window.scrollTo(0, 0)
        resetModal();
      }, [resetModal])

const reducerFn = (state, action) => {
    switch (action.type) {
        case "EMAIL":
            setValid(
                action.payload.trim().includes('@') 
                && state.currentPassword.length > 7 
                && state.newPassword.length > 7 
                && state.confirmPassword.length > 7 
                && validate(state.newPassword, state.confirmPassword)
                );
            return {...state, email: action.payload.trim()}
        case "CURRENT_PASSWORD":
            setValid(
                state.email.trim().includes('@') 
                && action.payload.length > 7 
                && state.newPassword.length > 7 
                && state.confirmPassword.length > 7 
                && validate(state.newPassword, state.confirmPassword)
                );
            return {...state, currentPassword: action.payload}
        case "NEW_PASSWORD":
            setValid(
                state.email.trim().includes('@') 
                && state.currentPassword.length > 7 
                && action.payload.length > 7 
                && state.confirmPassword.length > 7 
                && validate(action.payload, state.confirmPassword)
                );
            return {...state, newPassword: action.payload}
        case "CONFIRM_PASSWORD":
            setValid(
                state.email.trim().includes('@') 
                && state.currentPassword.length > 7 
                && state.newPassword.length > 7 
                && action.payload.length > 7 
                && validate(state.newPassword, action.payload)
                );
            return {...state, confirmPassword: action.payload}
        case "RESET":
            return {email: '', currentPassword: '', newPassword: '', confirmPassword: ''}
        default:
            return state;
    }
}

const [state, dispatch] = useReducer(reducerFn, {email: '', currentPassword: '', newPassword: '', confirmPassword: ''})

const onFormSubmit = (e) => {
    e.preventDefault();
    editUserSettings(state)
    //reset form //
    dispatch({type: "RESET"});
    setValid(false)
}

    return (
        <div className='basic'>
                 <h2>Password & Security</h2>
                    {modal ? <Modal status={modal.status} /> : null }
                 <form className='basic_form' onSubmit={onFormSubmit}>
                        <span>
                            <label>Email</label>
                            <input type="email" onChange={(e)=> dispatch({type: "EMAIL", payload: e.target.value})}
                            value={state.email} placeholder={user.email}/>

                            <label>Current Password *</label>
                            <input type="password" onChange={(e)=> dispatch({type: "CURRENT_PASSWORD", payload: e.target.value})}
                            value={state.currentPassword} placeholder='Current password'/>

                          <div className="login_requirement">
                                <label>Requirements</label>
                                <span>
                                    <li>A valid email address</li>
                                    <li>Password must be more than 7 characters</li>
                                    <li>New passwords must match</li>
                                </span>

                            </div>
                            

                            <button className={valid ? 'btn mt1' : 'disable mt1'} type='submit'>Save</button>

                        </span>

                        <span>
                            <label>New Password *</label>
                            <input type="password" onChange={(e)=> dispatch({type: "NEW_PASSWORD", payload: e.target.value})}
                            value={state.newPassword}
                            placeholder='New password'/>

                            <label>Confirm Password *</label>
                            <input type="password" onChange={(e)=> dispatch({type: "CONFIRM_PASSWORD", payload: e.target.value})}
                            value={state.confirmPassword}
                            placeholder='Confirm password'/>

                        </span>


                        


                 </form>
        </div>
    )
}

export default Security
