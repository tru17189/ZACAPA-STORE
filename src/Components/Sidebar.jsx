import React, { useState } from 'react';
import '../css/Burger_menu.css';
import {FaBars, FaRegChartBar, FaRProject, FaTh, FaTimes, FaUserAlt} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Main_title from './Main_title';

const Sidebar = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path: "/another",
            name: "Another",
            icon: <FaRProject />
        }
    ]
    return(
        <div className='container'>
            <div style={{width: isOpen ? "300px" : "50px"}} className='sidebar'>
                <div className='top_section'>
                    <div style={
                        {marginLeft: isOpen ? "0px" : "0px"} && 
                        {display: isOpen ? "none" : "flex"}
                    } className='bars'>
                        <FaBars onClick={toggle}/>
                    </div>
                    <div style={
                        {marginLeft: isOpen ? "0px" : "0px"} && 
                        {display: isOpen ? "flex" : "none"}
                    } className='bars'>
                        <FaTimes onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link"
                        activeclassname="active">
                            <div className='icon'>{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
            <Main_title msg="ZACAPA STORE" />
        </div>
    )
}

export default Sidebar;