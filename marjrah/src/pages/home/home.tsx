import React from 'react';
import Banner from "./banner";
import Working from "./working";
import Reviews from "./reviews";
import GetStarted from "./getstarted";
import Discover from "./discover";



const Home = () => {
    return (
        <div className="flex flex-col items-center mb-28">
            <Banner/>
            <Working/>
            <Reviews/>
            <GetStarted/>
            <Discover/>
        </div>
    )
}

export default Home