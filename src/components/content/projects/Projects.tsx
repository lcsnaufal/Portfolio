import React from "react";
import "./Projects.css";

export default function Projects(){
    return(
        <div className="projectDiv">
            <div>
                <div className="projectCircle">
                    <div className="circle">
                        ●
                    </div>
                    <div>
                        Projects
                    </div>
                </div>
            </div>
            <div className="divPortfolioLink">
                <a href="https://github.com/lcsnaufal/Portfolio" className="linkPortfolio">
                    Portfolio
                </a>
            </div>
        </div>
    )
}
