import React from 'react';
import findPet from '../../assets/blogs.png';

const Banner = () => {
    return (
        <div className="w-11/12 h-2/5 mt-32 bg-[#ff4c68]">
            <div className="flex items-center justify-between h-full">
                <div className="text-white font-semibold text-4xl ml-32 ">
                    <div className="">
                        <p>Learn the language of your lovely pet from our experts<br/></p>
                    </div>
                </div>
                <img src={findPet} alt="findPet" className="mx-32 my-6"/>
            </div>

        </div>
    )
}

export default Banner;