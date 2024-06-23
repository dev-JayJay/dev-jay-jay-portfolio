import React from "react";

const Hero = () => {
    return (
        <div>
            <div className="w-[80%] mx-auto flex flex-row items-center gap-3">
                <div className="w-50%">
                    <div className="text-green-500 flex flex-col font-semibold mb-3">
                        <h4 className="text-6xl">Full Stack</h4>
                        <h4 className="text-6xl">JavaScript Developer</h4>
                    </div>
                    <p className="text-white opacity-55 mb-3">Specializing in building dynamic web applications using React and Node.js. I create scalable backend services and seamless user interfaces.</p>
                    <div className="flex gap-5">
                        <button className="bg-green-500 text-white text-center font-semibold px-4 py-2 rounded-lg">Download Resume</button>
                        <button className="bg-green-500 text-white text-center font-semibold px-4 py-2 rounded-lg">Contact Me</button>
                    </div>
                </div>

                <img src="image/checkbg-1.jpeg" alt="HeroImage"/> 
            </div>
        </div>
    );
}
export default Hero;