import React from 'react'
import SidebarFilter from './SidebarFilter'
import {FaUserFriends} from 'react-icons/fa'
import {MdDesignServices, MdBusinessCenter} from 'react-icons/md'
import  {RiBracesFill, RiPaintBrushFill} from 'react-icons/ri'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-menu">
                        <h4 className="sidebar-menu-title">Menu</h4>
                                <li className="sidebar-menu-links selected"> <FaUserFriends className="sidebar-menu-icon"/> All Talents</li>
                                <li className="sidebar-menu-links"> <MdDesignServices className="sidebar-menu-icon"/> Graphic & Design</li>
                                <li className="sidebar-menu-links"> <RiBracesFill className="sidebar-menu-icon"/> Tech & Programming</li>
                                <li className="sidebar-menu-links"> <MdBusinessCenter className="sidebar-menu-icon"/> Busines Operations</li>
                                <li className="sidebar-menu-links"> <RiPaintBrushFill className="sidebar-menu-icon"/> Digital Marketing</li>
            </div>

            <SidebarFilter title="Subcategory"/>
            <SidebarFilter title="Rating"/>
            <SidebarFilter title="Location"/>
        </div>
    )
}

export default Sidebar
