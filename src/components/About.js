import React from "react";
import Atoms from "./Atoms";

const About = () => {
    const { SectionsSubHeaders } = Atoms;
    return(
        <div>
            <div>
                <SectionsSubHeaders text={`About Me`} />
            </div>
        </div>
    );
}

export default About;