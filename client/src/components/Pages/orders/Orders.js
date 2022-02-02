import {React, useState } from 'react'
import OrderNav from '../../UI/Purchase/OrderNav'
import './Purchase.css'
import Summary from '../../UI/Purchase/Summary'
import OrderItem from '../../UI/Purchase/OrderItem'
import CardPaymentForm from '../../UI/Purchase/CardPaymentForm'
import MomoPaymentForm from '../../UI/Purchase/MomoPaymentForm'

const Orders = () => {

    const [toggle, setToggle] = useState({card : true, momo : false});

    const handleCard = () => {
        setToggle((prevState) => {
            return {...prevState, card : true, momo : false}
        });
    }

    const handleMomo = () => {
        setToggle((prevState) => {
            return {...prevState, momo : true, card : false}
        });
    }


    return (
        <>
        <div className="order">
                <OrderNav order="nav-active" />

            <div className="order-details">
            
                <OrderItem />
                <OrderItem />

                <div className="order-payment mt5">
                    <h4 className="project-title">Payment Method</h4>
                        <div className="order-payment-labels">
                            <label onClick={handleCard} className={toggle.card ? 'order-payment-label-active' : null } >Visa/Credit Card</label>
                            <label onClick={handleMomo} className={toggle.momo ? 'order-payment-label-active' : null }>MTN MoMo</label>
                        </div>
                        <div className="order-payment-form">
                            {toggle.card && <CardPaymentForm />}
                            {toggle.momo && <MomoPaymentForm />}
                        </div>
                </div>
                
            </div>

            <div className="order-content">
               <Summary name="Make Payment" />         
            </div>

        </div>
       
        </>
    )
}

export default Orders
