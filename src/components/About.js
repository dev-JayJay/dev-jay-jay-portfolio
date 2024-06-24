import React from "react";
import Atoms from "./Atoms";

const About = () => {
    const { SectionsSubHeaders } = Atoms;
    return(
        <div id="about">
            <div>
                <SectionsSubHeaders text={`About Me`} />
            </div>
            <div className="w-[95%] mx-auto flex flex-col items-center gap-10 md:flex-row">
                <div className="w-[90%] h-[65vh] mx-auto md:w-[40%]">
                    <img src='image/newJay.png' alt='myImage' className="w-[67%] h-[70vh] p-2 mx-auto border border-green-500 rounded-full" />
                    <div className="w-[80%] mx-auto my-3">
                        <span className="text-green-500 text-2xl font-semibold mb-2">John Jonathan Gaiya</span> <br/>
                        <span className="text-green-500 text-2xl font-semibold mb-2">BSC. Physical And Computing Science</span>
                    </div>
                </div>
                <div className="w-[90%] mx-auto md:w-[50%]">
                    <div className="py-4">
                        <h4 className="text-green-500 text-3xl font-semibold mb-2">Who am I?</h4>
                        <p className="text-white opacity-70">I'm John Jonathan Gaiya, a cool-headed Software Developer and avid learner. I'm passionate about growth, both for myself and others. Let's code and grow together!</p>
                    </div>
                    <div className="py-4">
                        <h4 className="text-green-500 text-3xl font-semibold mb-2">What do I do?</h4>
                        <p className="text-white opacity-70">I craft digital solutions, design system architectures, and leverage tools for efficient development. Problem-solving is my key to tackle challenges, I staying updated with tech advancements. Specialized in web development, I create drive innovation, enhance user experiences, and propel businesses forward. My passion for growth fuels my quest to create impactful solutions for tomorrow's challenges.</p>
                    </div>
                    <div className="py-4">
                        <h4 className="text-green-500 text-3xl font-semibold mb-2">Experience</h4>
                        <p className="text-white opacity-70">I've honed my skills in crafting efficient digital solutions for the past Two year. I've collaborated on projects, tackled challenges, and continuously expanded my knowledge. Through hands-on experience and learning opportunities, I've grown professionally, gaining insights into the intricacies of software development and contributing to impactful solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;