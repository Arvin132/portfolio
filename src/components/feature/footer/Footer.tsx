import React, { useState } from "react";
import "./footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { IconContext } from "react-icons";
import clipboardy from 'clipboardy';

function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const Footer = () => {
    let [copyText, setCopyText] = useState("copy")
    const buttonClickAction = async () => {
        await clipboardy.write("a29asgha@uwaterloo.ca")
        setCopyText("copied!")
        await delay(2000)
        setCopyText("copy")
    }

    return (
        <div className="footer__container">
            <div className="footer__email__container">
                <div className="footer__copied__text"><p className="footer__text "> {copyText}</p></div>
                <button onClick={buttonClickAction}> <p className="footer__text footer__email__text"> a29asgha@uwaterloo.ca </p> </button>
            </div>
            <IconContext.Provider value={{color: "white", size: "2em"}}>
                <a href="https://github.com/Arvin132"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/arvinasghari/"><AiFillLinkedin className="footer__text"/></a>
            </IconContext.Provider>
        </div>
    )
}



export default Footer;