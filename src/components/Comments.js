import React from "react";
import Atoms from "./Atoms"

const Comments = () => {
    const { SectionsSubHeaders } = Atoms;
    return(
        <div>
            <div>
                <SectionsSubHeaders text={`Comments`} />
            </div>
            <div >
                <div className="w-[80%] mx-auto my-6 flex flex-row flex-wrap gap-6">
                    {
                        commentsData.map((data,index) => {
                            return (
                                <div key={index} className="w-[100%] mx-auto border border-green-700 rounded-xl p-2 md:w-[22%]">
                                    <img src={data.img} alt={data.name} className="w-[60%] mx-auto rounded-full my-3" />
                                    <h4 className="text-2xl text-green-500 font-semibold">{data.name}</h4>
                                    <span className="text-yellow-500 font-semibold">{data.role}</span>
                                    <p className="text-white opacity-65">{data.text}</p> 
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default Comments;

const commentsData = [
    {
        img: "",
        name: "Femi Fatokun",
        role: "Software Engineer",
        text: "Your software development skills are truly impressive! Your attention to detail, creativity, and problem-solving abilities shine through in every project. Keep up the fantastic work, you're making the internet a better place!",
    },
    {
        img: "image/tolujohn.jpeg",
        name: "Tolu John",
        role: "Full stack Software dev",
        text: "John Jonathan is one the amazing software developers I’ve ever worked with, so fast in development, delivers Product fast and always willing to learn and use new technologies.",
    },
    {
        img: "",
        name: "Samson Onifade",
        role: "Backend Developer",
        text: "Your software development skills are impressive! The design is clean, the functionality is smooth, and the user experience is top-notch. Keep up the excellent work!",
    },
    {
        img: "image/fronttrade.jpeg",
        name: "Samuel Adeniyi Oyeniran",
        role: "Frontend Developer",
        text: "He's web application sleek design and seamless user experience are truly impressive! The attention to detail and innovative features showcase he's exceptional skills as a software developer. Keep up the fantastic work!",
    },
]