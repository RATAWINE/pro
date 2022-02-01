import React, { useReducer, useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import  { connect } from 'react-redux'
import { signUpUser, resetModal } from '../../Actions/actions'
import Modal from '../../UI/Modal'
import './auth.css'

const Signup = (props) => {

    const [isValid, setIsValid] = useState(false);

    // extract the resetModal function from props
    // this was passed to the component by the connect()
    const {resetModal} = props

    // useEffect: this will cause a reset of the modal state to null 
    // everytime the modal is mounted
    useEffect(()=>{
        resetModal();
    },[resetModal])

    // reducer function
    const signupFn = (state, action) => {
        switch (action.type) {
            case "INPUT_USERNAME":
                setIsValid( action.payload.trim().length > 6 && state.email.trim().includes('@') )
                return {...state, username : action.payload}
    
            case "INPUT_EMAIL" :
                setIsValid( state.username.trim().length > 6 && action.payload.trim().includes('@') )
                return {...state, email : action.payload}
    
            case "RESET_FORM" :
                return { username: '', email : '' }
            default:
                return state;
        }
    }

// useReducer state extracts
const [signupState, dispatch] = useReducer(signupFn, { username: '', email : '' })

 // function to call the signUpUser() action-creator to sign up users
const formSubmit = (e) => {
    e.preventDefault();
    props.signUpUser(signupState);
    //dispatch( {type: "RESET_FORM" } );
}


    return (
        <div className="signup">

                <h4>Create an Account</h4>
                {/* ERROR HANDLING MODAL */}
                { props.modal ? <Modal status={props.modal.status}/> : null }

                <form className="signup-form" onSubmit={formSubmit}>
                    <label htmlFor="username">Username *</label>
                    <input type="text" onChange={(e)=>dispatch({ type: "INPUT_USERNAME", payload: e.target.value })}
                    value={signupState.username} placeholder="Enter your username"/>

                    <label htmlFor="email">Email address *</label>
                    <input type="email" onChange={(e)=>dispatch({ type: "INPUT_EMAIL", payload: e.target.value })}
                    value={signupState.email} placeholder="Enter your email"/>

                    <span className="mb2">
                        <input type="checkbox" name="" id="checkbox"/>
                        <label htmlFor="checkbox" id='checkbox_label'>Subscribe for email newsletters</label>
                    </span>

                    <div className="signup_requirement">
                        <label>Requirements</label>
                        <span>
                            <li>Username must be more than 6 characters</li>
                            <li>A valid email address</li>
                        </span>
                    </div>

                    <button className={`${isValid ? 'btn' : 'btn disable'}`} type="submit">Creat Account</button>
                </form>

                <p> Already have an account? <Link to='/auth/login'> Login </Link> </p>

        </div>
    )
}

// this function helps to access all the state inside
// our Redux store
const mapStateToProps = (state) => {
    return state
}

// connect() - links this component to the Redux store and provides access
// to the state and reducers

export default connect(mapStateToProps,{signUpUser, resetModal})(Signup)
