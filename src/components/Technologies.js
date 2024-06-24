import React from "react";
import Atoms from "./Atoms";
import { FaHtml5, FaCss3, FaReact, FaNode  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiNextdotjs , SiStyledcomponents, SiTailwindcss, SiPhp, SiMysql, SiExpress, SiMongodb } from "react-icons/si";



const tech = [
    {
        lang: "HTML",
        icon: FaHtml5
    },
    {
        lang: "CSS",
        icon: FaCss3
    },
    {
        lang: "JAVASCRIPT",
        icon: IoLogoJavascript
    },
    {
        lang: "REACT",
        icon: FaReact
    },
    {
        lang: "NEXT",
        icon: SiNextdotjs 
    },
    {
        lang: "REDUX",
        icon: SiRedux
    },
    {
        lang: "STYLED COMPONENTS",
        icon: SiStyledcomponents
    },
    {
        lang: "TAILWIND CSS",
        icon: SiTailwindcss 
    },
    {
        lang: "PHP",
        icon: SiPhp
    },
    {
        lang: "MYSQL",
        icon: SiMysql
    },
    {
        lang: "NODE",
        icon: FaNode  
    },
    {
        lang: "EXPRESS",
        icon: SiExpress
    },
    {
        lang: "MONGO DB",
        icon: SiMongodb
    },
];


const mappedTech = tech.map((items, index) => {
    const IconComponent = items.icon;
    return(
        <div key={index} className="text-center px-4 py-2">
            <div className="flex flex-row text-white text-center px-4 py-2 rounded-lg items-center gap-1 bg-green-500"><IconComponent className="bg-white rounded-md text-green-700" />{items.lang}</div>
        </div>
    )
});

const Technologies = () => {
    const { SectionsSubHeaders } = Atoms;
    return(
        <div id="technologies">
            <div className="">
                <SectionsSubHeaders text={`Technologies`}/>
                <div className="w-[70%] my-7 mx-auto flex flex-row flex-wrap justify-evenly">
                    {mappedTech}
                </div>
            </div>
        </div>
    );
}
export default Technologies;