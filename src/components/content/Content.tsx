import React from "react";
import Description from "./description/Description";
import "./Content.css";
import Projects from "./projects/Projects";



export default function Content(){
    return(
        <div className="divFatherContent">
            <div className="descriptionFather">
                <Description/>
            </div>
            <div className="projectsFather">
                <Projects/>
            </div>
        </div>
    )
}