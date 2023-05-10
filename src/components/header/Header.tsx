import React from "react";
import "./header.css";

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__animation">
                <span className="header__animation__first"> <strong> Arvin </strong> </span>
                <span className="header__animation__slide">
                    <span className="header__animation__second"> Asgharian Rezaee</span>
                </span>
            </div>
        </div>
    )
}

export default Header;