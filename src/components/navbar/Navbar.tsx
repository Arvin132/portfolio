import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GoPencil } from "react-icons/go"
import { FaWrench } from "react-icons/fa"
import { IconContext } from "react-icons"
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "./navbar.css";

const Navbar = () => {
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
            title: "Projects",
            icons: <FaWrench/>,
            link: "/projects"
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