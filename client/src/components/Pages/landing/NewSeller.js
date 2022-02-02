import axios from 'axios';
import React, { useReducer, useState } from 'react'
import { createSeller } from '../../Actions/actions';
import {connect} from 'react-redux'
import Modal from '../../UI/Modal'
import {MdClose} from 'react-icons/md'
import './landing.css'



const NewSeller = (props) => {
    const [step, setStep] = useState(0);
    const [city, setCity] = useState(null);
    const [lang, setLang]= useState('');
    const [skill, setSkill]= useState('');
    const [title, setTitle]= useState('Personal Details.');
    const [fill, setFill] = useState(10)

    //axios call to city api
        const getCity = async(country) => {
            if(country === '') {
                setCity(null);
                return;
            }
            try {
                const res = await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {country})
                setCity(res.data.data);
                dispatch({type: "CITY", payload: res.data.data[0]})
                
            } catch (error) {
                console.log(error)
            }
        }    
    
    // reducer function to manage FORM STATE
    const formReducer = (state, action) => {
        switch (action.type) {
            case "COUNTRY":
                if(action.payload === ''){
                    getCity(action.payload);
                    return {...state, country: action.payload, city: ''}
                }
                getCity(action.payload);
                return {...state, country: action.payload}
            case "CITY":
                return {...state, city : action.payload}
            case "SKILLS" : 
                return {...state, skills : [...state.skills, action.payload]}
            case "DELETE_SKILL" :
                const result = state.skills.filter((skill) => skill !== action.payload)
                return {...state, skills : result}
            case "LANGUAGE" : 
                return {...state, language : [...state.language, action.payload]}
            case "DELETE_LANG" :
                const res = state.language.filter((lang) => lang !== action.payload)
                return {...state, language : res}
            case "ABOUT" :
                return {...state, about : action.payload}
            case "PROF" :
                return {...state, profession : action.payload}
            case "WEB" : 
                return {...state, links: {...state.links, website: action.payload}}
            case "FB":
                return {...state, links: {...state.links, facebook : action.payload}}
            case "LNK" : 
                return {...state, links: {...state.links, linkedin: action.payload}}
            default:
                return state;
        }
    }

    const [formState, dispatch] = useReducer(formReducer, {
        country: '', 
        city: '',
        about : '',
        profession: '',
        skills : [],
        language : [],
        links: {website: '', facebook: '', linkedin: '' }
    });

const addLang = () => {
    //console.log(ref)
    if(lang === '') {
        return;
    }
    dispatch({type: "LANGUAGE", payload: lang[0].toUpperCase() + lang.substring(1).toLowerCase()})
    setLang('');
}
const addSkill = () => {
    //console.log(ref)
    if(skill === '') {
        return;
    }
    dispatch({type: "SKILLS", payload: skill[0].toUpperCase() + skill.substring(1).toLowerCase()})
    setSkill('');
}

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    if(step === 0) {
        if(formState.country !== '' && formState.city !== null && formState.about !== '' ) {
            setStep(1)
            setFill(50)
            setTitle('Professional Info.')
        }else{
            return
        }
    }
    if(step === 1) {
        if(formState.language.length > 0 && formState.skills.length > 0  && formState.profession !== '' ) {
            setStep(2)
            setFill(100)
            setTitle('Accounts.')
        }else{
            return
        }
    }
    if(step === 2) {
        // call an action creator to submit the formdata to DB
        props.createSeller(formState);
    }
    

}

const prevForm = (e) => {
    e.preventDefault();
    //...do something
    setStep(step - 1);
    setFill(prev => {
        if(prev === 50){
            return 10
        }
        if(prev === 100){
            return 50
        }
        return 10
    })
    setTitle(prev => {
        if(prev === 'Professional Info.'){
            return 'Personal Details.'
        }
        if(prev === 'Accounts.'){
            return 'Professional Info.'
        }
        return 'Personal Details.'
    })
}


    return (
        <div className='seller-account'>

                <div className="seller-account-wrap">
                <div className="progress-bar mb3">
                    <div className="progress-bar-container">
                        <div>
                            <p>Details</p>
                            <p style={{ color: 'var(--primary-bg-color)', border: '2px solid var(--primary-bg-color)'}}>1</p>
                        </div>
                        <div>
                            <p>Profession</p>
                            <p style={{ color: fill >= 50 && 'var(--primary-bg-color)', border: fill >= 50 && '2px solid var(--primary-bg-color)'}}>2</p>
                        </div>
                        <div>
                            <p>Accounts</p>
                            <p style={{ color: fill === 100 && 'var(--primary-bg-color)', border: fill === 100 && '2px solid var(--primary-bg-color)'}}>3</p>
                        </div>
                    </div>
                    <span><div className="slider" style={{width: `${fill}%`}} ></div></span>
                </div>
                    <div className="seller-account-form">
                        <span style={{width : '100%'}}>
                            <h3> {title}</h3>
                            <p className='mb5'>Let potential buyers know more about you and <br/>your gained skills to provide them services</p>

                            {/* MODAL */}
                            {props.modal ? <Modal status={props.modal.status} /> : null }

                            { step === 0 ?  
                                <form >
                                    <label htmlFor="country">Country *</label>
                                    <select type="text" id="country" placeholder='Select Country' value={formState.country}
                                    onChange={(e)=> dispatch({type : "COUNTRY", payload: e.target.value})}> 
                                        <option value="">Select Country</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Senegal">Senegal</option>
                                    </select>

                                    <label htmlFor="city">City *</label>
                                    <select type="text" id="city" placeholder='Select City' value={formState.city}
                                        onChange={(e)=> dispatch({type : "CITY", payload: e.target.value})}> 
                                                { 
                                                   city ? city.map((el) => {
                                                        return <option key={el} value={el}>{el}</option>
                                                    }) : null
                                                } 
                                        </select>

                                    <label htmlFor="about">About yourself *</label>
                                    <textarea id="about" placeholder='Tell us about yourself' 
                                    value={formState.about} onChange={(e)=> dispatch({type : "ABOUT", payload: e.target.value})} />

                                        <button onClick={(e) => onFormSubmit(e)} className='' >Continue</button>
                               </form> : null }

                             { step === 1 ?  
                                <form >
                                <label htmlFor="profession">Profession *</label>
                                    <select type="text" id="profession" placeholder='Select Profession' value={formState.profession}
                                    onChange={(e)=> dispatch({type : "PROF", payload: e.target.value})}> 
                                        <option value="">Select Your Profession</option>
                                        <option value="Graphic & Design">Graphic & Design</option>
                                        <option value="Web Developer">Web Developer</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value="Content Writer">Content Writer</option>
                                    </select>

                                <label htmlFor="skills">
                                        Skill set * <i className='fa fa-plus add' onClick={addSkill}></i>
                                    </label>
                                    <input value={skill} type="text" id="skills" 
                                    placeholder='Gained Skills' className='mb0' 
                                    onChange={(e)=> setSkill(e.target.value.trim())}/>                                
                                    <div className='mb3'>
                                        { formState.skills.map((skill)=> {
                                            return (
                                                <li key={skill} className='list-tag' 
                                                onClick={()=>dispatch({type: "DELETE_SKILL", payload:skill})}>
                                                    {skill}
                                                </li>
                                                )
                                            })}
                                    </div>

                                    <label htmlFor="language">
                                        Language * <i className='fa fa-plus add' onClick={addLang}></i>
                                    </label>
                                    <input value={lang} type="text" id="language" 
                                    placeholder='Add Languages' className='mb0' 
                                    onChange={(e)=> setLang(e.target.value.trim())}/>                                
                                    <div className='mb3'>
                                        {formState.language.map((language)=> {
                                            return (
                                                <li key={language} className='list-tag' 
                                                onClick={()=>dispatch({type: "DELETE_LANG", payload:language})}>
                                                    {language} <MdClose />
                                                </li>
                                                )
                                            })}
                                    </div>

                                    <button className='prevBtn' onClick={prevForm}>Previous</button>
                                    <button onClick={(e) => onFormSubmit(e)} className='' >Continue</button>

                                </form> : null }


                            { step === 2 ? 
                                <form >
                                        <label htmlFor="website">Website </label>
                                        <input value={formState.links.website} type="text" id="website" 
                                        placeholder='https://yourwebsitelink.com' onChange={(e)=> dispatch({type : "WEB", payload: e.target.value})}/> 

                                        <label htmlFor="facebook">Facebook</label>
                                        <input value={formState.links.facebook} type="text" id="facebook" 
                                        placeholder='https://facebook.com' onChange={(e)=> dispatch({type : "FB", payload: e.target.value})}/> 

                                        <label htmlFor="linkedin">LinkedIn</label>
                                        <input value={formState.links.linkedin} type="text" id="linkedin" 
                                        placeholder='https://linkedin.com' onChange={(e)=> dispatch({type : "LNK", payload: e.target.value})}/> 

                                    <button className='prevBtn' onClick={prevForm}>Previous</button>
                                    <button onClick={onFormSubmit} >Save & Submit</button>

                                </form> : null }
                         </span>
                    </div>
                </div>
                
        </div>
    )
}


const mapStateToprops = (state) => {
    console.log(state);
    return state
}

export default connect(mapStateToprops,{createSeller})(NewSeller)
