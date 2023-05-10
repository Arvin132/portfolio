import { Navigation } from "react-minimal-side-navigation/lib";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import React, { useState } from "react";
import { BiAlignLeft } from "react-icons/bi";
import { AiOutlineCoffee } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "./navbar.css";

const Navbar = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSideBarOpen] = useState(true);

    return (
        <React.Fragment>
            <div
                onClick={() => setIsSideBarOpen(false)}
                className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}/>

            <div>
                <button className="btn-menu" onClick={(): void => { setIsSideBarOpen(true)}}>
                    <BiAlignLeft/>
                </button>
            </div>

            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
                isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
                }`}>

                {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
                <Navigation
                    activeItemId={location.pathname}
                    onSelect={({ itemId }) => {
                        navigation(`/${itemId}`)
                    }}
                    items={[
                        {
                            title: "Home",
                            itemId: "/home",
                            elemBefore: () => <AiOutlineCoffee/>
                        },
                        {
                            title: "Posts",
                            itemId: "/posts",
                            elemBefore: () => <BsFillPencilFill/>,
                            subNav: [
                                {
                                    title: "Projects",
                                    itemId: "/posts/projects"
                                },
                                {
                                    title: "Other",
                                    itemId: "/about/other"
                                },
                            ]
                        }
                    ]}
                    />
            </div>
        </React.Fragment>
    )
}

export default Navbar;