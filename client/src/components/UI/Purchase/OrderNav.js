import React from 'react'
import '../../Pages/orders/Purchase.css'

const OrderNav = ({order, complete}) => {

    return (
        <div className="order-nav">
            <ul>
                <li className={order}><span>1</span> <span>Order Details</span></li>
                <li className={complete}><span>2</span> <span>Complete</span></li>

            </ul>
            
        </div>
    )
}

export default OrderNav
