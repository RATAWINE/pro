import React, {useReducer, useEffect} from 'react'
import { Link } from 'react-router-dom'
import SingleCategoryItem from '../category/SingleCategoryItem'
import Image from '../../../assets/images/tech/frontend.jpg'
import './user.css'
import ReviewItem from '../../UI/Review/ReviewItem'


const MyOrders = ({resetModal}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        resetModal();
      }, [resetModal])

    const navReducer = (state, action) => {
        switch (action.type) {
            case "IN_PROGRESS":
                return {inprogress: true}
            case "COMPLETED":
                return {completed: true}
            case "CANCELLED" :
                return {cancelled: true}
            case "DISPUTE" :
                return {dispute: true}
            default:
                return state;
        }
    }

    const [navState, dispatch] = useReducer(navReducer, {inprogress: true})


    return (
        <div className='user-orders'>
            <div className='user-orders_header'>

                <h2>My Orders</h2>
                <nav className='mb3 mt3'>
                    <ul>
                        <li className={navState.inprogress ? 'nav-active' : null} onClick={()=>dispatch({type:"IN_PROGRESS"})}>In progress</li>
                        <li className={navState.completed ? 'nav-active' : null} onClick={()=>dispatch({type:"COMPLETED"})}>Completed</li>
                        <li className={navState.cancelled ? 'nav-active' : null} onClick={()=>dispatch({type:"CANCELLED"})}>Cancelled</li>
                        <li className={navState.dispute ? 'nav-active' : null} onClick={()=>dispatch({type:"DISPUTE"})}>Dispute</li>
                    </ul>
                </nav>
            </div>

            <div className="user-orders_content mb5">
                <table>
                    <tbody>

                    <tr className='theader'>
                        <td>Seller</td>
                        <td>Gig</td>
                        <td>Due Date</td>
                        <td>Amount</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                    <tr>
                        <td>Michael</td>
                        <td>Graphic Design</td>
                        <td>12-12-2021</td>
                        <td>Ghc2000</td>
                        <td>Completed</td>
                        <td><Link to='/'> view </Link></td>
                    </tr>
                    <tr>
                        <td>Michael</td>
                        <td>Graphic Design</td>
                        <td>12-12-2021</td>
                        <td>Ghc2000</td>
                        <td>Completed</td>
                        <td><Link to='/'> view </Link></td>
                    </tr>
                    <tr>
                        <td>Michael</td>
                        <td>Graphic Design</td>
                        <td>12-12-2021</td>
                        <td>Ghc2000</td>
                        <td>Completed</td>
                        <td><Link to='/'> view </Link></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="user-fav mb5">
                <h2 className='mb2'>Favorites</h2>

                <div className="user-fav_content">
                    <SingleCategoryItem name='Michael' subcategory='Logo Design' price='800' image={Image}/>
                    <SingleCategoryItem name='Michael' subcategory='Logo Design' price='800' image={Image}/>
                    <SingleCategoryItem name='Michael' subcategory='Logo Design' price='800' image={Image}/>
                    
                </div>


            </div>

            <div className="user-review">
                <h2 className='mb2'>Review (5)</h2>

                <div className="user-review_content">
                   <ReviewItem />
                   <ReviewItem />
                   <ReviewItem />
                    
                </div>


            </div>

        </div>
    )
}

export default MyOrders
