import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import SingleCategoryItem from '../category/SingleCategoryItem'
import Gig from '../../../assets/images/tech/frontend.jpg'

const Gigs = () => {
    return (
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
    )
}

export default Gigs
