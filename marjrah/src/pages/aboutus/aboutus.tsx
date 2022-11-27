import React from "react";
import dog from "../../assets/care.png"
import CountUp from 'react-countup';
import Banner from "./banner";
import OurTeam from "./our-team";



const Aboutus = () => {
    return (
        <div className="flex flex-col items-center ">
            <Banner/>
            <div className="w-11/12">
                <div className="shadow-[0px_0px_3px_rgba(3,102,214,0.3)] p-16 m-6">
                    <div className="relative flex flex-row mt-7 mb-7">
                        <div className=" flex flex-row pb-10  w-2/5">
                            <p className="text-2xl text-center text-gray-700 ml-32">
                                We, the team of AdoPet, are a group of people working towards the betterment of the untended animals on the streets through our technological innovations. We do this by arranging adoption awareness on our platform. These adoption awareness invites rescuers from all over the city to bring their rescued animals or and be able to meet with so many potential adopting families. All the funds that we collect as donations, go towards resources of the these voiceless creatures

                            </p>
                        </div>
                        <div className="w-2/5 ml-60 ">
                            <img className="h-[500px]" src={dog} alt="hund"/>
                        </div>
                    </div>
                    <div className="relative flex flex-row mt-20 items-center justify-center">
                        <div className=" grid grid-rows-2 grid-flow-col gap-2 w-2/5 pr-60 mr-14 ml-7 mb-14 ">
                            <div className="mt-7">Animals rescued so far
                                <div className="text-rose-500 text-5xl"><CountUp end={69} duration={2}/></div>
                            </div>
                            <div className="mt-7">Complaints addresed so far
                                <div className="text-rose-500 text-5xl"><CountUp end={128} duration={2}/></div>
                            </div>
                            <div className="mt-7">Blogs written so far
                                <div className="text-rose-500 text-5xl"><CountUp end={99} duration={2}/></div>
                            </div>
                            <div className="mt-7">donations collected
                                <div className="text-rose-500 text-5xl">₹<CountUp end={25} duration={2}/>.2k</div>
                            </div>
                        </div>
                        <div className=" flex flex-row pb-10 p-7 mt-3 w-2/5">
                            <p className="text-2xl text-center text-gray-700 mr-10 ">
                                So far, we have successfully organized more than 20 adoption camps and have seen more than 400 rescued animals starting a new and better life with their forever families.
                                We aim to make the world a better place for animals by making them a part of our lives. We are a team of 4 people who are working towards this goal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <OurTeam/>
        </div>
    )
}


export default Aboutus;