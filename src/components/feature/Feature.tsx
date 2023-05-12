import React from "react";
import { uiText, gameText, aiText } from "./ui";
import "./feature.css";

const Feature = () => {
    return (
        <div className="feature__container">
            
            <div className="feature__code">
                
            </div>
            <div className="feature__text">
            <h1 className="feature__header_1"> My areas of intereset and hobbies</h1>
            </div>
            <br></br>
            <div className="feature__text">
               <div className="feature__bar"></div>
               <h2 className="feature__header_2 "> UI/UX Design</h2>
              {uiText}
            </div>
            <br/>
            <div className="feature__bar"></div>
            <div className=" feature__text">
            <h2 className="feature__header_2"> Game Development
            </h2>
              {gameText}
            </div> 

            <br/>
            
            <div className="feature__bar"></div>
            <div className="feature__text"><h2 className="feature__header_2"> Artificial Intelligence 
            </h2>
              {aiText}
            </div>
        </div>
    )
}

export default Feature;