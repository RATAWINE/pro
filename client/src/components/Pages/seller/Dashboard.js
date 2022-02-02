import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import SingleCategoryItem from '../category/SingleCategoryItem'
import Gig from '../../../assets/images/tech/frontend.jpg'
import { FaRegEnvelope } from 'react-icons/fa'
import {BiGlobe, BiUser} from 'react-icons/bi'
import {BsPhone} from 'react-icons/bs'
import './seller.css'

const Dashboard = ({user}) => {
    return (
            <div className='dashboard'>
                <div className="dashboard_abt">
                    <div className="s-card">
                        <span><h3>About Me</h3> <i className='fa fa-pencil edit'> </i> </span>
                            <p>{user.about}</p>
                    </div>

                    <div className="s-card">
                            <span><h3>Additional Info</h3> <i className='fa fa-pencil edit'> </i> </span>
                            <div className="content">
                                <span><BiUser />  <p>{user.firstname} {user.lastname}</p></span>
                                <span><BiGlobe />  <p>{user.language.toString()}</p></span>
                                <span><FaRegEnvelope />  <p>{user.email}</p></span>
                                <span><BsPhone />  <p>{user.phone}</p></span>
                            </div>
                    </div>

                </div>
                <div className="dashboard_posts s-card">
                       
                            <h3>My Gigs</h3>
                        
                        <span>
                            <OwlCarousel items={3.08} margin={20} autoplaySpeed={1500} loop={true}
                                nav={true} navElement="div"
                                navText={[`<i class='fas fa-arrow-left'></i>`, `<i class='fas fa-arrow-right'></i>`]}
                                responsive={
                                    {
                                        1400 : {items : '3.08'},
                                        1200 : {items : '2.3'},
                                        760 : {items : '2'},
                                        340 : {items : '1'}
                                    }
                                }
                            >
                                <SingleCategoryItem name='Michael Aidoo' image={Gig} price='1400'/>
                                <SingleCategoryItem name='Michael Aidoo' image={Gig} price='1400'/>
                                <SingleCategoryItem name='Michael Aidoo' image={Gig} price='1400'/>
                                <SingleCategoryItem name='Michael Aidoo' image={Gig} price='1400'/>
                            </OwlCarousel>
                        </span>

                </div>
            
        </div>
    )
}

export default Dashboard
