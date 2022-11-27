import React from 'react';
import MemberCard from "../../components/MemberCard";
import yash from "../../assets/YAsh.png";
import saumy from "../../assets/Saumy.png";
import prashant from "../../assets/Prashant.png";
import Gaurav from "../../assets/Gaurav.png";




const OurTeam = () => {
return (
    <div className="w-11/12 m-12 px-6">
        <div className="shadow-[0px_0px_3px_rgba(255,76,104,1)] p-16 mb-32">
            <p className="text-5xl font-bold text-[#ff4c68]">Our Team</p>
            <div className="flex flex-row justify-around items-center mt-10 mb-20">
                <MemberCard name="Gaurav Sharma" email="gaurav021201@gmail.com" img={Gaurav}/>
                <MemberCard name="Prashant Gehlot" email="gehlotprashant968@gmail.com " img={prashant}/>
                <MemberCard name="Saumy Shukla" email="saumy4854@gmail.com" img={saumy}/>
                <MemberCard name="Yash Katyan" email="yashkatyan1208@gmail.com" img={yash}/>
            </div>
        </div>
    </div>
    )
}

export default OurTeam