import React from 'react'
import './Category.css'
import OwlCarousel from 'react-owl-carousel'
import Banner from '../../UI/Banner'
import Subcategory from '../../UI/Category/Subcategory'
import Slide from '../../../assets/images/design/slide02.jpg'
import  {users} from '../../../assets/data/users'
import SingleCategoryItem from './SingleCategoryItem'

const CategoryPage = () => {

    const title = "Graphic & Design";
    const text = "Designs to make you stand out."

    const filteredData = users.filter((el) => el.gig.category === title);

    return (
        <div className="category-page">
            
            {/* Banner */}
            <Banner title={title} para={text} image={Slide} />

            {/* Title */}
            <div className="mt5">
                <h3 className="title">Most popular in {title}</h3>
            </div>

             {/* subcategories */}
             <OwlCarousel 
                items={5.5} autoplaySpeed={1500} margin={15} loop={true} nav={true} navElement="div"
                navText={[`<i class='fas fa-arrow-left'></i>`, `<i class='fas fa-arrow-right'></i>`]}
                responsive={{ 1400 : {items : '5.5'}, 1200 : {items : '4'}, 760 : {items : '2.5'}, 340 : {items : '1.5'}}}
                >
             <Subcategory title="Logo Design" />
             <Subcategory title="Illustration" />
             <Subcategory title="Book Design" />
             <Subcategory title="Graphic Design" />
             <Subcategory title="Website Design" />

             </OwlCarousel>

            {/* Title */}
             <div className="mt5">
                <h3 className="title">Explore more on {title}</h3>
            </div>

            {/* Filtered Categories */}
            <div className="category-page_list">
                {filteredData.map((item) => {
                    return (
                        <SingleCategoryItem key={item.id} 
                        name={item.username} image={item.gallery[0]} 
                        price={item.gig.package[0].price} subcategory={item.gig.subcategory}/>
                    );
                })} 
            </div>         


        </div>
    )
}

export default CategoryPage
