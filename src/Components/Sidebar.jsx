import React, { useState } from 'react';
import '../css/Burger_menu.css';
import '../css/Stores.css'
import { AiFillGift, AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { MdNewReleases, MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import Main_title from './Main_title';

const Sidebar = ({children}) => {
    // This constant is use to open the sidebar
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    //this constant is use to change background color of the shopping pages (Hombre, mujer, etc...)
    
    // The next json is the information that will be show in the sidebar
    const menuItem = [
        {
            path:"/nuevosingresos",
            name:"Nuevos Ingresos",
            icon:<MdNewReleases/>
        },
        {
            path:"/hombres",
            name:"Hombres",
            icon:<AiOutlineMan/>
        },
        {
            path:"/mujeres",
            name:"Mujeres",
            icon:<AiOutlineWoman/>
        },
        {
            path: "/giftcards",
            name: "Gift cards",
            icon: <AiFillGift />
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
                        <GiHamburgerMenu onClick={toggle}/>
                    </div>
                    <div style={
                        {marginLeft: isOpen ? "0px" : "0px"} && 
                        {display: isOpen ? "flex" : "none"}
                    } className='bars'>
                        <MdOutlineClose onClick={toggle}/>
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
            <main>
                {children}
            </main>
            <Main_title msg="ZACAPA STORE" />
        </div>
    )
}

export default Sidebar;