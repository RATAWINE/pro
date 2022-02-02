import React from 'react'
import {BsStarFill} from 'react-icons/bs'

const OrderItem = () => {
    return (
                <li>
                    <span></span>
                    <span>
                        <h4 className="order-title mb1">I will design 3 modern minimalist logo design in 24hours</h4>
                        <p className="mb1"><BsStarFill /> 4.9 (29852 reviews)</p>
                        <span className="order-qty mb1">
                            <p>Quantity</p> 
                            <select name="" id="">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                                <option value="1">6</option>
                                <option value="1">7</option>
                                <option value="1">8</option>
                                <option value="1">9</option>
                                <option value="1">10</option>
                            </select>
                    </span>
                    <h4>Basic Package </h4>
                    </span>
                    
                </li>
    )
}

export default OrderItem
