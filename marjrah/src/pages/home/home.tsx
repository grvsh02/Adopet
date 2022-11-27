import React from 'react';
import Banner from "./banner";
import Working from "./working";



const Home = () => {
    return (
        <div className="flex flex-col items-center mb-28">
            <Banner/>
            <Working/>
            </div>
    )
}

export default Home