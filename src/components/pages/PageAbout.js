import "./style.css"
import React from "react";

const PageAbout = () => {
  return (
    <div className="AboutWrapper">
      <div className="AboutContainer">
      {/* First Section/ Col -1 */}
        <div className="ImageSection">
          <img className="AboutImage" src="/image/newJay.png" alt="ProfileImage" />
          <div className="ProfileText">
            <span>John Jonathan Gaiya</span>
            <p>BSC. Physical And Computing Science</p>
          </div>
        </div>
      {/* Second Section/ Col -2 */}
        <div className="TextSection">
          {
            content.map((item, index) => (
            <div key={index} className="WhoAmI">
              <h5>{item.header}</h5>
              <p className="Text">{item.content}</p>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default PageAbout;

const content =[
  {
    header: "Who am I?",
    content: "I'm John Jonathan Gaiya, a cool-headed Software Developer and avid learner. I'm passionate about growth, both for myself and others. Let's code and grow together!"
  },
  {
    header: "What do I do?",
    content: "I craft digital solutions, design system architectures, and leverage tools for efficient development. Problem-solving is my key to tackle challenges, I staying updated with tech advancements. Specialized in web development, I create drive innovation, enhance user experiences, and propel businesses forward. My passion for growth fuels my quest to create impactful solutions for tomorrow's challenges."
  },
  {
    header: "Experience",
    content: "I've honed my skills in crafting efficient digital solutions for the past one year. I've collaborated on projects, tackled challenges, and continuously expanded my knowledge. Through hands-on experience and learning opportunities, I've grown professionally, gaining insights into the intricacies of software development and contributing to impactful solutions."
  },
];
