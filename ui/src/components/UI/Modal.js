import React from 'react'
import {FaTimes, FaTimesCircle , FaCheckCircle } from 'react-icons/fa'
import { connect } from 'react-redux'
import { resetModal } from '../Actions/actions'
import Loader from './Loader/Loader'

const Modal = (props) => {

    return (
        <div className={`modal_${props.status}`}>
                { props.status === 'success' && <FaCheckCircle className='modal_icon' />  }
                { props.status === 'error' && <FaTimesCircle className='modal_icon'/> }
                { props.status === 'loading' && <Loader widthHeight='15px' border='.2rem solid white' borderTop='.2rem solid var(--primary-bg-color)' /> }
                <span className="modal_message">
                  {props.modal.message} 
                </span>

                <FaTimes className='modal_icon modal_icon-close' onClick={()=>props.resetModal()} />
        </div>  
    )
}

const mapStateToProps = (state, myOwnProps) => {
    return {...state,...myOwnProps }
}

export default connect(mapStateToProps,{resetModal})(Modal)
