import React from "react";
import { uiText, gameText, aiText } from "./ui";
import "./feature.css";

const Feature = () => {
    
    return (
        <div className="feature__container">
            
            <div className="feature__code">
                
            </div>

            <h1 className="feature__header_1 feature__text"> things About me that might intreset you</h1>
            <br></br>
            <div className="feature__bar">
            <li className="feature__text"><h2 className="feature__header_2"> UI/UX Design
            </h2>
              {uiText}
            </li>
            </div>

            <div className="feature__bar">
            <li className="feature__text"><h2 className="feature__header_2"> Game Development
            </h2>
              {gameText}
            </li>
            </div>

            <div className="feature__bar">
            <li className="feature__text"><h2 className="feature__header_2"> Artificial Intelligence 
            </h2>
              {aiText}
            </li>
            </div>
        </div>
    )
}

export default Feature;