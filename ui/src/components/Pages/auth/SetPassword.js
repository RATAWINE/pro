import React, {useReducer, useState, useEffect} from 'react'
import  { connect } from 'react-redux'
import { setUserPassword, resetModal } from '../../Actions/actions'
import Modal from '../../UI/Modal'

const SetPassword = (props) => {
    const {resetModal} = props;

    // states
    const[toggle, setToggle] = useState(false);
    const [isValid, setIsValid] = useState(false)

    useEffect(()=>{
        resetModal();
    },[resetModal])

// validator //
const validate = (a,b) => {
    return a === b
}

// a reducer function
const setPassFn = (state, action) => {

    switch (action.type) {
        case "INPUT_PASSWORD" :
            setIsValid( action.payload.length > 8 && state.confirmPassword.length > 8 && validate(action.payload, state.confirmPassword))
            return {...state, password : action.payload}

        case "INPUT_CONFIRMPASSWORD" :
            setIsValid( state.password.length > 8 && action.payload.length > 8 && validate(action.payload, state.password))
            return {...state, confirmPassword : action.payload}
        case "RESET_FORM" :
            return { password : '', confirmPassword: '' }
        default:
            return state;
    }
}

// useReducer state extracts
const [passwordState, dispatch] = useReducer(setPassFn, { password : '', confirmPassword: '' })

 // function to call the setUserPassword() action-creator to signup users
const formSubmit = (e) => {
    e.preventDefault();
    props.setUserPassword(passwordState);
    //dispatch( {type: "RESET_FORM" } );
}


    return (
        <div className="signup">

                <h4>Set your Password</h4>

                { props.modal ? <Modal status={props.modal.status}/> : null }

                <form className="signup-form" onSubmit={formSubmit}>

                    <label htmlFor="">Create a new password *</label>
                    <div className="pass">
                    <input type={toggle ? 'textbox' : 'password' } onChange={(e)=>dispatch({ type: "INPUT_PASSWORD", payload: e.target.value })}
                    value={passwordState.password} placeholder="New password" />
                        <label onClick={() => setToggle(prevState => !prevState)}>{toggle ? 'hide' : 'show'}</label>
                    </div>

                    <label htmlFor="">Password confirmation *</label>
                    <input type="password" onChange={(e)=>dispatch({ type: "INPUT_CONFIRMPASSWORD", payload: e.target.value })}
                    value={passwordState.confirmPassword} placeholder="Confirm new password" />

                    <div className="signup_requirement">
                        <label htmlFor="">Password requirements</label>
                        <span>
                            <li>Password must be more than 8 characters</li>
                            <li>Password must match</li>
                        </span>

                    </div>
                    <button className={`${isValid ? 'btn' : 'btn disable'}`} type="submit">Set Password</button>
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
export default connect(mapStateToProps,{setUserPassword, resetModal})(SetPassword)
