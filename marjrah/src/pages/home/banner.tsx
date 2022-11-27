import React from 'react';
import pawprint from '../../assets/pawprint.png';

const Banner = () => {
    return (
        <div className="w-full h-full mt-20 bg-[#ff4c68]">
            <div className="flex items-center justify-between h-full">
                <div className="text-white font-semibold text-4xl ml-32 ">
                    <div className="">
                        <p>Adopt and give your love to the deserving<br/></p>
                    </div>
                </div>
                <img src={pawprint} alt="findPet" className="mx-32 my-6"/>
            </div>

        </div>
    )
}

export default Banner;