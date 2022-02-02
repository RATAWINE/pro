import React from 'react'

const Button = ({name,color, bgColor, border, padding, display, textSize, width, fontWeight, className}) => {
    return (
        <button className={className} style={{backgroundColor: bgColor, color:color, fontSize: textSize,borderRadius:"50px",fontWeight:fontWeight, border: border, padding: padding, display:display, cursor: "pointer", width: width}}> {name} </button>
    )
}

export default Button
