import React, {useReducer, useEffect } from 'react'
import Button from '../../UI/Button'
import Modal from '../../UI/Modal'


const BasicProfile = ({editUserProfile, editUserPhoto, user, modal, resetModal}) => {
// const [state, setState] = useState({photo : ''});
    useEffect(() => {
        window.scrollTo(0, 0);
        resetModal();
      }, [resetModal])

    const reducerFn = (state, action) => {
        switch (action.type) {
            case "FNAME":
                return {...state, fname: action.payload.trim()}
            case "LNAME":
                return {...state, lname: action.payload.trim()}
            case "PHONE":
                return {...state, phone: action.payload}
            case "FACEBOOK":
                return {...state, fbk: action.payload}
            case "INSTAGRAM":
                return {...state, inst: action.payload}
            case "LINKEDIN":
                return {...state, lnk: action.payload}
            case "RESET":
                return {fname: '', lname: '', phone: '', fbk: '', inst: '', lnk: ''}
            default:
                return state;
        }
    }

    const [inputState, dispatch] = useReducer(reducerFn, {fname: '', lname: '', phone: '', fbk: '', inst: '', lnk: ''})

    const onPhotoSelect = (e) => {
        const formData = new FormData()
        formData.append('profilePic', e.target.files[0])
        editUserPhoto(formData); 

    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        // console.log(inputState);
        dispatch({type:"RESET"})
        //call an action creator
        editUserProfile(inputState);
    }
   
    
    return (
        <div className='basic'>
            <span >
                <h2>Personal Details</h2>
                {modal ? <Modal status={modal.status} /> : null }

            </span>

            <div className='basic_intro mb3 mt2'>
                <span>
                    <img src={user.photo ? `http://localhost:8000/uploads/users/${user.photo}` : 'http://localhost:8000/uploads/users/blank-user.jpg'} alt="" />
                </span>
                <span>
                    <h4>Profile picture</h4>
                    <span className='basic_buttons mb1'>
                        <label htmlFor="profile-pic" className='change-img'> Change </label>
                        <input type="file" accept='.jpg, .png' name="profilePic" id="profile-pic" onChange={onPhotoSelect}/>
                        <Button name='Delete' border='2px solid var(--primary-bg-color)' padding='.6rem 3rem' bgColor='transparent' color='var(--primary-bg-color)'/>
                    </span>
                    <p>Requirement: Must be .jpg .jpeg .png file</p>
                </span>
            </div>

            

            <form className='basic_form' encType='multi-part' onSubmit={onFormSubmit}>

                    <span>
                        <label>Firstname *</label>
                        <input type="text" placeholder={user.firstname ? user.firstname : 'Tell us your firstname'}
                            value={inputState.fname} onChange={(e)=>{dispatch({type: "FNAME", payload: e.target.value})}}
                        />

                        <label>Lastname *</label>
                        <input type="text" placeholder={user.lastname ? user.lastname : 'Tell us your lastname'}
                            value={inputState.lname} onChange={(e)=>{dispatch({type: "LNAME", payload: e.target.value})}}
                        />

                        <label>Phone number *</label>
                        <input type="tel" placeholder={user.phone ? user.phone : 'Tell us your phone number'}
                            value={inputState.phone} onChange={(e)=>{dispatch({type: "PHONE", payload: e.target.value})}}
                        />

                        <button type="submit"> Save </button>

                    </span>

                    <span>
                         <label>Facebook</label>
                        <input type="text" placeholder='https://www.facebook.com'
                            value={inputState.fbk} onChange={(e)=>{dispatch({type: "FACEBOOK", payload: e.target.value})}}
                        />

                        <label>Instagram</label>
                        <input type="text" placeholder='https://www.instagram.com'
                            value={inputState.inst} onChange={(e)=>{dispatch({type: "INSTAGRAM", payload: e.target.value})}}
                        />

                        <label>LinkedIn</label>
                        <input type="text" placeholder='https://www.linkedin.com'
                            value={inputState.lnk} onChange={(e)=>{dispatch({type: "LINKEDIN", payload: e.target.value})}}
                        />
                        
                    </span>

            </form>
            
                
            
        </div>
    )
}

export default BasicProfile
