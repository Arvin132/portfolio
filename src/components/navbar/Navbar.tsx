import React, { useState } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GoPencil } from "react-icons/go"
import { FaScroll } from "react-icons/fa"
import {IconContext} from "react-icons"
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "./navbar.css";

const Navbar = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSideBarOpen] = useState(true);
    const navbarElements = [
        {
            title: "Home",
            icons: <AiFillHome/>,
            link: "/home"
        },
        {
            title: "Blogs",
            icons: <GoPencil/>,
            link: "/blogs"
        },
        {
            title: "Cover Letter",
            icons: <FaScroll/>,
            link: "/cl"
        },
    ]
    return (
        <div className="navabar__container">
            <IconContext.Provider value={{color: "white", size: "2em"}}>
                { navbarElements.map((elem) => (
                    <NavLink to={elem.link} className="navbar__link">
                        {elem.icons}
                        <div className="navbar__text"> {elem.title} </div>
                    </NavLink>
                ))}
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;