import React from 'react'


const Card = (props) => {

// const ref = useRef();

// // closing the popper when clicked outside
// const closePopper = (e, ref) => {
//     if(ref.current && !ref.current.contains(e.target)){
//         props.closePopper(false)
//     }
// }

// useEffect(()=> {
//     window.addEventListener('click', (e) => closePopper(e, ref));
//     return window.removeEventListener('click', (e) => closePopper(e, ref))
// })

    return (
        <div className='card ' style={{width: props.width, top: props.top, left: props.left, right: props.right}}> {props.children}</div>
    )
}

export default Card
