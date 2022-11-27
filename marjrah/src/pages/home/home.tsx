import React from 'react';
import Banner from "./banner";
import Working from "./working";
import Reviews from "./reviews";



const Home = () => {
    return (
        <div className="flex flex-col items-center mb-28">
            <Banner/>
            <Working/>
            <Reviews/>
        </div>
    )
}

export default Home