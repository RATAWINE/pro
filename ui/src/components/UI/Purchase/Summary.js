import React from 'react'
import '../../Pages/orders/Purchase.css'

const Summary = ({name}) => {
    return (
       
             <div className="wrap">
                        <h3>Price summary</h3>
                        <span>
                            <p>Subtotal</p>
                            <p>GHc80</p>
                        </span>
                        <span>
                            <p>Service Fee</p>
                            <p>GHc5</p>
                        </span>
                        <span>
                            <p>Delivery</p>
                            <p>2 Days</p>
                        </span>
                        <span className="total">
                            <h4>Total</h4>
                            <h4>GHc85.00</h4>
                        </span>
                </div>
    )
}

export default Summary
