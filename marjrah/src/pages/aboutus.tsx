import React from "react";
import dog from "../assets/dog.png"



const Aboutus = () => {
    return (
        <div className="flex flex-col">
        <div className="relative flex flex-col justify-center min-h-screen ">
            <h1 className="text-6xl font-semibold text-rose-500">
                About Us
            </h1>
        </div>
        <div className="relative flex flex-row">
        <div className=" flex flex-row pb-10 w-2/5">
            <p className="text-2xl text-center text-gray-700 ml-20">
                We, the team of AdoPet, are a group of people working towards the betterment of the untended animals on the streets through our technological innovations. We do this by arranging adoption awareness on our platform. These adoption awareness invites rescuers from all over the city to bring their rescued animals or and be able to meet with so many potential adopting families. All the funds that we collect as donations, go towards resources of the these voiceless creatures
            </p>
        </div>
        <div className="w-2/5 pl-60 ml-60 ">
            <img src={dog} alt="kukkur"/>
        </div>
            <div>

            </div>

        </div>
        </div>
  );
}


export default Aboutus;