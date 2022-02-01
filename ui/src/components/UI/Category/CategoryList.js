import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import CategoryItem from './CategoryItem'
import {data} from '../../../assets/data/data'
import {BiChevronDown} from 'react-icons/bi'

const CategoryList = ({ category, showNav }) => {

    const filteredData = data.filter(el => el.category === category)
    let title;
    if(category === "design"){
        title = "Graphic Design";
    }
    if(category === "programming"){
        title = "Developers";
    }
    if(category === "digital-marketing"){
        title = "Digital marketing";
    }
    

    return (
        <div className="category">

            <div className="category_title">
                <h2 className="title">{title}</h2>
                <button> View All <BiChevronDown className="category_title-icon" /> </button>
            </div>

            <OwlCarousel className="category_list" 
                items={4} autoplaySpeed={1500} margin={20} loop={true}
                nav={showNav} navElement="div"
                navText={[`<i class='fas fa-arrow-left'></i>`, `<i class='fas fa-arrow-right'></i>`]}
                    responsive={
                                {
                                    1400 : {items : '4'},
                                    1200 : {items : '3'},
                                    760 : {items : '2'},
                                    340 : {items : '1'}
                                }
                            }
                        > 
                        {filteredData.map((cat) => {
                            return (
                                <CategoryItem key={cat.id} title={cat.title} image={cat.image} />
                            )
                        })}
                            
             </OwlCarousel>

        </div>
    )
}

export default CategoryList
