import React from "react";
import dog from "../assets/dog.png"
import CountUp from 'react-countup';



const Aboutus = () => {
    return (
        <div className="flex flex-col">
        <div className="relative flex flex-col pb-14  ">
            <h1 className="text-6xl font-semibold text-rose-500">
                About Us
            </h1>
        </div>
        <div className="relative flex flex-row mb-7">
        <div className=" flex flex-row pb-10 w-2/5">
            <p className="text-2xl text-center text-gray-700 ml-20">
                We, the team of AdoPet, are a group of people working towards the betterment of the untended animals on the streets through our technological innovations. We do this by arranging adoption awareness on our platform. These adoption awareness invites rescuers from all over the city to bring their rescued animals or and be able to meet with so many potential adopting families. All the funds that we collect as donations, go towards resources of the these voiceless creatures
            </p>
        </div>
        <div className="w-2/5 pl-60 ml-60 ">
            <img src={dog} alt="kukkur"/>
        </div>
        </div>

            <div className="relative flex flex-row mt-7">
                <div className="w-2/5 pr-60 mr-60 ml-7 mb-7">
                    <div className="mt-7">Animals rescued so far
                        <div className="text-rose-500 text-5xl"><CountUp end={69} duration={2}/></div>
                    </div>
                </div>
                <div className=" flex flex-row pb-10 w-2/5">
                    <p className="text-2xl text-center text-gray-700 mr-10 ">
                        So far, we have successfully organized more than 20 adoption camps and have seen more than 400 rescued animals starting a new and better life with their forever families.
                       </p>
                </div>
            </div>
        </div>
  );
}


export default Aboutus;