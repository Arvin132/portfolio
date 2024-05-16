import React from "react";
import "./feature.css";


const aiText = 
`Since auditing SYDE 522 which was taught by Professor Tizhoosh, A certain interest in how Machines can “think”. Things such as the “Turing test” and the “Chinese room experiment” 
caught my attention and showed me the beauty of these topics. Delving into more I found making models and finding data to feed into these “black boxes” on Kaggle is quite enjoyable  
and “artsy”. The more I learn about all the theories behind these methods and techs the more I fall in love with the field.  I want to contribute to this field not just because of 
some false Boom that has recently occurred, making everyone jump on the  AI bandwagon. I truly feel there is something special about how we try to mimic the behavior of the human brain to 
solve problems and understand more about ourselves and the world..

`;

const gameText = 
`Growing up I played a lot of video games, more than anyone I have seen. I don’t enjoy games as much as before, mostly because I have other hobbies now
 and not as much time as before. Sometimes though some game gets released and re-ignite my passion for games. I have ideas and a passion for game development
  as well but have not tried my hand at it. Maybe one day`;
    
const projectText = 
`Sometimes I get an idea, or I am searching for an specific tool but I don’t manage to find it. Sometimes I will flourish these ideas into projects. See me GitHub and blogs.`;

const musicText = 
`I remember vividly when in the 10th grade exam period my friend Sheldor came to me speaking of this band called Queen and how awesome they are. I disgraced and didn’t pay much attention to it.
 Everything changed after watching the Bohemian Rhapsody movie. Even though the movie has many dishonest parts and portrays Freddie as a weird narcissistic maniac,
  It made me fall in love with the band's discography. Queen was my introduction to rock’n’roll and made me delve deeper into music from the past. Ever since then 
  I spend a significant portion of my off time Listening to albums from different bands and trying to explore and find new music as much as possible, anything from classic rock, metal,
 jazz and fusion styles, pop rock from the 2000s and so more. after finding out about Metallica I even picked up guitar and I currently practice and jam with others. I am still a newbie 
 but I am improving and now I am trying to learn some theory alongside as well on my own
`;

const rpgText = 
`Growing up in Iran I played a lot of Dungeons and Dragons, Mostly DMing since no one in my friend group really wanted to. I try to expand and play other games 
as well as Pathfinder and Cyberpunk, but in the end, I mostly play online DND alongside friends`;
    
      



const Feature = () => {
    return (
        <div className="feature__container">
            
            <div className="feature__code">
                
            </div>
            <div className="feature__text">
            <h1 className="feature__header_1"> My areas of intereset and hobbies</h1>
            </div>
            <br/>

            <div className="feature__bar"></div>
            <div className="feature__text">
                <h2 className="feature__header_2"> Machine Intelligence 
                </h2>
                {aiText}
                <div>
                    <a href="https://www.youtube.com/watch?v=tExPpuk-UQ8" className="feature__hyperlink">     
                        {"SYDE 522 is freely available on YouTube and even you can audit it!"}
                    </a>
                </div>
            </div>
            <br/>

            <div className="feature__text">
               <div className="feature__bar"></div>
               <h2 className="feature__header_2 "> Projects </h2>
              {projectText}
            </div>
            <br/>

            <div className="feature__text">
               <div className="feature__bar"></div>
               <h2 className="feature__header_2 "> Music </h2>
                {musicText}
                <div>
                    <a href="https://open.spotify.com/user/tfk8z9mn48hlv6uizpw4cat5d?si=8fe8d01099654d5c" className="feature__hyperlink">     
                        {"See my Spotify here"}
                    </a>
                </div>
            </div>
            <br/>

            <div className="feature__bar"></div>
            <div className=" feature__text">
            <h2 className="feature__header_2"> Gaming
            </h2>
                {gameText}
                <div>
                    <a href="https://steamcommunity.com/profiles/76561198853881919/" className="feature__hyperlink">     
                        {"See my Steam profile here"}
                    </a>
                </div>
            </div> 
            <br/>
            
            <div className="feature__bar"></div>
            <div className=" feature__text">
            <h2 className="feature__header_2"> TTRPGs
            </h2>
              {rpgText}
            </div> 
            <br/>

            <div className="feature__bar"></div>
            <div className=" feature__text">
            <h2 className="feature__header_2"> Other ?!
            </h2>
            <ul>
                <li>I listen to a lot of “masty o rasty” a social podcast by king raam.</li>
                <li>I used to have a collection of coins from all the travels that I did with my family</li>
                <li>I read as much as possible, mostly either tech books or fiction.</li>
                <li>I just got into playing chess because of my friend</li>
                <li>So much more which I am not feeling like writing rn</li>
            </ul>
            </div> 
            <br/>
        </div>
    )
}

export default Feature;