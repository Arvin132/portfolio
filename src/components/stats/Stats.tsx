import React from "react";
import './stats.css';
import {FaGraduationCap} from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import {IconContext} from 'react-icons';
import { MdWork } from 'react-icons/md';

function Stats() {
    const workString = 'looking for F24 internship';
    const locationString = 'Ontario/Canada';
    const education = 'UWaterloo CS 2025' 
    return(
        <div className="stats__container">
            <IconContext.Provider value={{color: "white", size: "1.5rem"}}>
            <p className="work__stats" ><MdWork/> {workString}</p>
            <p className="location__stats" ><IoLocationSharp/>{locationString}</p>
            <p className="education__stats" ><FaGraduationCap /> {education}</p>
            </IconContext.Provider>
        </div>
    )
}
export default Stats;