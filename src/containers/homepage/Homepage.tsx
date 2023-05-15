import React from "react";

import { ProfilePic, Article, Feature, Header, Footer, Stats } from "../../components";
function HomePage() {


    return (
        <React.Fragment>
            <Header />
            <div className="section__margin gradient__bg homepage__top">
                <ProfilePic />
                <Stats></Stats>
                <Article />
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