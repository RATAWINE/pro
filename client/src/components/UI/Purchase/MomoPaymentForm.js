import React from 'react'

const MomoPaymentForm = () => {
    return (
        <div>
            <form className="order-payment-card">
                <span>
                    <input type="text" name="" id="account-name" placeholder="Enter MoMo Account Name" />
                    <input type="number" name="" id="mobile-number" placeholder="Mobile Number" />
                </span>
                <button className="btn" type="submit">Pay with MoMo</button>
            </form>
            
        </div>
    )
}

export default MomoPaymentForm
