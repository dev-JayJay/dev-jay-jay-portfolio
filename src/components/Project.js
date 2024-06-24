import React from "react";
import Atoms from "./Atoms"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { projectData } from "./projectData";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const mappedProject = projectData.map((itmes,index) => {
    const techmapped = itmes.tech;
    // const IconComponent = techmapped.icon;
    return(
        <div className="flex flex-row gap-3 items-center" key={index}>
            <div className="w-[50%] mx-auto h-[50vh] ">
                <img src={itmes.image} alt={itmes.title} className="w-full h-full py-4 " />
            </div>
            <div className="w-[40%] mx-auto my-3">
                <h4 className="text-green-500 text-[18px] font-semibold">{itmes.type}</h4>
                <h4 className="text-green-500 text-2xl font-semibold my-1">{itmes.title}</h4>
                <p className="text-white opacity-75 mb-2">{itmes.text}</p>
                <div className="flex flex-row flex-wrap">
                    {
                        techmapped.map((tech) => (
                            <div key={tech.lang} className="text-center px-4 py-2">
                                {/* <IconComponent className="bg-white rounded-md text-green-700" /> */}
                                <div className="flex flex-row text-white text-center px-4 py-2 rounded-lg items-center gap-1 bg-green-500">{tech.lang}</div>
                            </div>
                        ))
                    }
                </div>
                <a href={itmes.link} className='text-green-500 font-semibold underline'>See Repo / Live view</a>
            </div>
        </div>
    )
  })

const Project = () => {
    const { SectionsSubHeaders } = Atoms
    return(
        <div>
            <div>
                <SectionsSubHeaders text={`Project & Collaboration`} />
            </div>
            <div className="w-[80%] mx-auto my-6">
                <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                transitionDuration={300}
                responsive={responsive}
                className="w[100%] h-auto border border-white"
                >
                    {mappedProject}
                </Carousel>;
            </div>
        </div>
    );
}
export default Project;