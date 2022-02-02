import { React, useState, useReducer, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser, resetModal } from '../../Actions/actions'
import Modal from '../../UI/Modal'
import './auth.css'

const Login = (props) => {

    // states
    const[toggle, setToggle] = useState(false);
    const [isValid, setIsvalid] = useState(false);

    // extract the resetModal function from props
    // this was passed to the component by the connect()
    const {resetModal} = props;

    // useEffect: this will cause a reset of the modal state to null 
    // everytime the modal is mounted
    useEffect(()=>{
        resetModal();
    },[resetModal])

    // a reducer function for useReducer
    const loginHandle = (state, action) => {
        switch (action.type) {
            case "EMAIL_INPUT":
                setIsvalid(action.payload.trim().includes('@') && state.password.trim().length > 8)
                return {...state, email : action.payload}
            case "PASS_INPUT":
                setIsvalid(state.email.trim().includes('@') && action.payload.trim().length > 8)
                return {...state, password: action.payload}
            default:
                return state;
        }
    }

    // useReducer state extracts
    const [loginState, dispatch] = useReducer(loginHandle, {email: '', password: ''});

    // function to call the loginUser() action-creator to signin users
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(loginState)
        props.loginUser(loginState);

    }

    return (
        <div className="login">
                <h4>Login to WePay</h4>

                {/* DISPLAY ERROR */}
                { props.modal ? <Modal status={props.modal.status} /> : null }

                {/* LOGIN FORM */}
                <form className="login-form" onSubmit={formSubmit}>

                    <label htmlFor="email">Email address *</label>
                    <input type="email" value={loginState.email} placeholder="Enter your email" 
                    onChange={(e) => dispatch({type: "EMAIL_INPUT", payload: e.target.value})} />

                    <label htmlFor="password">Password *</label>
                    <div className="pass">
                        <input type={toggle ? 'text' : 'password'} value={loginState.password} placeholder="Enter your password" 
                        onChange={(e) => {dispatch({type: "PASS_INPUT", payload: e.target.value})}} /> 
                        <label onClick={() => setToggle(prevState => !prevState)}>{toggle ? 'hide' : 'show'}</label>
                    </div>

                    <span>
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" id='checkbox_label'>Keep me logged in</label>
                    </span>
                    <div className="login_requirement">
                        <label>Requirements</label>
                        <span>
                            <li>Password must be more than 8 characters</li>
                            <li>A valid email address</li>
                        </span>

                    </div>
                    <button className={`${isValid ? 'btn' : 'btn disable'}`} type="submit">Login</button>
                </form>
                    <p> Don't have an account? <Link to='/auth/create'> Create Account</Link> </p>
                    <p className="mt1"> <Link className="link" to='/auth/forgotpassword'>Forgot Password</Link> </p>
        </div>
    )
}

// this function helps to access all the state inside
// our Redux store
const mapStateToProps = (state) => {
    // console.log(state)
    return state
}


// connect() - links this component to the Redux store and provides access
// to the state and reducers
export default connect(mapStateToProps,{loginUser, resetModal})(Login)
