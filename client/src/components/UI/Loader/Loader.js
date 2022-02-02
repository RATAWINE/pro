import React from 'react'
import './loader.css'

const Loader = ({border, borderTop, widthHeight, marginLeft, marginRight}) => {
    return <div className='loader' style={{width: widthHeight, height: widthHeight, border: border, borderTop: borderTop, marginLeft: marginLeft, marginRight: marginRight}}></div>

}

export default Loader
