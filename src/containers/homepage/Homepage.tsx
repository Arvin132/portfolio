import React from "react";
import "./homepage.css"

import { ProfilePic, Article, Feature, Header, Footer, Stats } from "../../components";
function HomePage() {


    return (
        <React.Fragment>
            <Header />
            <div className="section__margin gradient__bg homepage__top">
                <div className="homepage__profolio__container">
                    <ProfilePic />
                    <Stats />
                </div>
                <div className="h__spacer"></div> 
                <div className="homepage__article_container">  
                    <Article />
                </div>
            </div>
            <div className="section__padding section__margin">
                <Feature />
            </div>
            <div className="section__padding section__margin">
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default HomePage;