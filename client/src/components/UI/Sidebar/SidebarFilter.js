import React from 'react'
import {BiChevronDown} from 'react-icons/bi'

const SidebarFilter = ({title}) => {
    return (
        <div className="sidebar-filter">
                <div className="sidebar-filter_title">
                   {title} <BiChevronDown className="sidebar-filter_title-icon"/>
                </div>

                <div className="sidebar-filter-group">

                </div>
        </div>
    )
}

export default SidebarFilter
