import React from 'react'

const CardPaymentForm = () => {
    return (
        <div>
            <form className="order-payment-card" action="">
                                
                                <input type="text" name="" id="card-name" placeholder="Card Name" />                                
                                <input type="number" name="" id="card-number" placeholder="Card Number" />
                                <span>
                                    <input type="date" name="" id="card-expiry" placeholder="Card Expiry" />
                                    <input type="number" name="" id="card-cvv" placeholder="CVV Code" />
                                </span>
                                <button className="btn" type="submit">Make Payment</button>
                        </form>
        </div>
    )
}

export default CardPaymentForm
