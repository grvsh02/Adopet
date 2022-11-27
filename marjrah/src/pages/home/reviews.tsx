import React from "react";
import random from "../../assets/YAsh.png";

const NewsCard = ({ text }:any) => (
    <div className="w-full px-4 py-6 bg-white rounded-md news_card_shadow">
        <p className="text-[#5B6469] font-bold text-[15px]">{text} </p>
        <div className="pt-7 text-[13px] flex items-center gap-2">
            <img src={random} alt="person" className="w-10 h-10 rounded-full" />
            <div>
                <h1 className="font-medium">Joy Arnold</h1>
                <p className="text-[#BFBFC8]">@Joy Arnold222</p>
            </div>
        </div>
    </div>
);

const Reviews = () => {
    return (
        <section className="my-20">
            <div className="md:w-11/12 w-full md:px-0 px-3 mx-auto">
                <div className="pt-14 pb-4 h-[700px] overflow-auto bg-rose-100 flex items-center lg:flex-nowrap flex-wrap gap-1">
                    <article className="lg:w-1/2 w-full lg:pb-0 pb-4 flex flex-col lg:items-start items-center lg:ml-14 lg:mt-52">
                        <h1 className={`md:text-[40px] text-[30px] font-bold uppercase`}>
                            Know what others say
                        </h1>
                    </article>
                    <div className="flex gap-4 sm:flex-nowrap flex-wrap lg:w-1/2 mx-auto">
                        <div className="rounded-md w-full flex flex-col gap-3 items-center">
                            <NewsCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed arcu parturient nunc, neque euismod mollis tincidunt. Consectetur imperdiet viverra a massa felis scelerisque lectus " />
                            <NewsCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed arcu parturient nunc, " />
                            <NewsCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed arcu parturient nunc, neque euismod mollis tincidunt." />
                        </div>
                        <div className="rounded-md w-full flex flex-col gap-3 items-center">
                            <NewsCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed arcu parturient nunc, neque euismod mollis tincidunt." />
                            <NewsCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed arcu parturient nunc, neque euismod mollis tincidunt." />
                            <NewsCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed arcu parturient nunc," />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;