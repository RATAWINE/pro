import React, {useEffect} from 'react'
import OwlCarousel from 'react-owl-carousel'
import './Home.css'
import Banner02 from '../../../assets/images/design/slide02.jpg'
import Ux from '../../../assets/images/ux-01.jpg'
import Design from '../../../assets/images/design.jpg'
import Web from '../../../assets/images/web.jpg'
import Digital from '../../../assets/images/digital.jpg'
import CategoryItem from '../../UI/Category/CategoryItem'
import CategoryList from '../../UI/Category/CategoryList'
import Banner from '../../UI/Banner'
import CategoryIcons from '../../UI/Category/CategoryIcons'
import {BiSearch} from 'react-icons/bi'


const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="home">
            <div className="home_wrapper">
                <div className="home_content">

                    {/* SLIDER */}

                    <div className="home_content-banner">
                        <div className="container">
                            <div className="home_content-banner-details">
                                    <h4>Need a job done?</h4>
                                    <h2>The best place to find talents</h2>
                                    <p>Looking for a designer, developer or plumber? We've got you covered</p>
                                    <div className="header_search">
                                        <form>
                                            <BiSearch className="header_search-icon"/>
                                            <input type="search" name="header_search" id="" placeholder="Search for gigs/jobs"/>
                                            <button type="submit">Search</button>
                                        </form>
                                    </div>
                            </div>
                        </div>
                        
                    </div>

                    {/* TOP CATEGORIES */}

                    <div className="home_content-top-categories">
                        <h2 className="home_content-title title">Popular Services</h2>
                            <OwlCarousel items={5} autoplaySpeed={1500} margin={20} loop={true}
                                nav={true} navElement="div"
                                navText={[`<i class='fas fa-arrow-left'></i>`, `<i class='fas fa-arrow-right'></i>`]}
                                responsive={
                                    {
                                        1400 : {items : '5'},
                                        1200 : {items : '4'},
                                        760 : {items : '3'},
                                        340 : {items : '2'}
                                    }
                                }
                            > 
                                <CategoryItem title="UX/UI Designer" image={Ux} />
                                <CategoryItem title="Graphic Design" image={Design} />
                                <CategoryItem title="Web Development" image={Web} />
                                <CategoryItem title="Marketing" image={Digital} />
                                <CategoryItem title="Business" image={Digital} />
                            </OwlCarousel>
                    </div>

                    {/* SECTION HERE */}

                    <div className="home_content-category-list">
                        <Banner title="Get your business growing." 
                            para="Find high-quality services at every price point."
                                image={Banner02}
                            />
                        <div className="category-list mt5 mb3">
                            <CategoryIcons />
                        </div>
                    </div>

                    {/* SECTION HERE */}

                    <div className="home_content-categories">
                            <CategoryList category="programming" showNav={false}/> 
                             <CategoryList category="design" showNav={false}/>
                            <CategoryList category="digital-marketing" showNav={false}/>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
