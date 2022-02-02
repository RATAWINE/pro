import React from 'react'
import {BiChevronDown} from 'react-icons/bi'

const Filter = ({name}) => {
    return (
        <div className="filter">
            <div className="filter-menu">{name} <BiChevronDown className="filter-menu_icon" /></div>
                <div className="filter-content"></div>
            </div>
    )
}

export default Filter
