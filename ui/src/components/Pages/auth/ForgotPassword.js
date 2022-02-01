import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { forgotUserPassword, resetModal } from '../../Actions/actions'
import Modal from '../../UI/Modal'
import './auth.css'

const ForgotPassword = (props) => {

    const [isValid, setIsvalid] = useState(false);
    const [emailState, setEmailState] = useState({email : ''});

    // extract the resetModal function from props
    // this was passed to the component by the connect()
    const {resetModal} = props;

    // useEffect: this will cause a reset of the modal state to null 
    // everytime the modal is mounted
    useEffect(()=>{
        resetModal();
    },[resetModal])

    const onEmailChange = (e) => {
        setEmailState({ email : e.target.value })
        setIsvalid(e.target.value.trim().includes('@'))
    }

    // function to call the setUserPassword() action-creator to signup users
    const formSubmit = (e) => {
        e.preventDefault();
        props.forgotUserPassword(emailState);
    }

    return (
        <div className="login">
                <h4>Forgot Password</h4>

                {/* DISPLAY ERROR */}
                { props.modal ? <Modal status={props.modal.status} /> : null }

                {/* LOGIN FORM */}
                <form className="login-form" onSubmit={formSubmit}>

                    <label htmlFor="email">Email address *</label>
                    <input type="email" value={emailState.email} placeholder="Enter your email" 
                    onChange={onEmailChange} />

                    <button id='mybtn' className={`${isValid ? 'btn' : 'btn disable'}`} type="submit">Forgot Password</button>
                </form>
        </div>
    )
}

// this function helps to access all the state inside
// our Redux store
const mapStateToProps = (state) => {
    // console.log(state)
    return state;
}


// connect() - links this component to the Redux store and provides access
// to the state and reducers
export default connect(mapStateToProps, {forgotUserPassword, resetModal})(ForgotPassword)
