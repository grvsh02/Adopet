import React from "react";
import report from "../../assets/how_1.png";
import stories from "../../assets/how_2.png";
import dog from "../../assets/how_3.png";
import help from "../../assets/how_4.png";

const items = [
    {
        id: 1,
        icon: report,
        heading: "Find Animals in suffering and report them",
        text: "We will help you in rescuing them and put them up for adoption",
    },
    {
        id: 2,
        icon: stories,
        heading: "Read about the animals and their stories",
        text: "Hear it from pet owners and implements their tips for your pet",
    },
    {
        id: 3,
        icon: dog,
        heading: "Adopt a pet from our shelter",
        text: "Adopt among the thousands of pets that are up for adoption free of cost",
    },
    {
        id: 4,
        icon: help,
        heading: "Help us in our mission",
        text: "We are always looking for volunteers and donors to help us in our mission",
    },
];

const Working = () => {
    return (
        <section className="my-24">
            <div className="md:w-11/12 w-full md:px-0 px-3 mx-auto">
                <h1 className={`md:text-[40px] text-[30px] font-bold uppercase`}>how it works</h1>
                <div className="bg-rose-300 bg-opacity-30 px-8 py-14 rounded-md mt-8">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-8">
                        {items.map((item) => (
                            <div
                                className="text-center flex flex-col items-center justify-center"
                                key={item.id}
                            >
                                <img src={item.icon} alt="icon" className="pb-4 w-24" />
                                <h1 className="font-bold text-lg py-4">{item.heading}</h1>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Working;