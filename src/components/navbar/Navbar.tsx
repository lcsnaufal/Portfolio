import React from "react";
import "./Navbar.css";

export default function Navbar(){
    return(
        <div className="divFatherNavbar">
            <div className="title">
                <div className="lucas">Lucas Naufal</div>
                <div className="portfolioTitle">Portfolio</div> 
            </div>
            <div className="linksAll">
                    <div className="linksAllSecond">
                        <a href="https://github.com/lcsnaufal" className="socialLinks">github</a>
                    </div>
                    <div className="linksAllSecond">
                        <a href="mailto:dev.naufall@gmail.com" className="socialLinks">email</a>
                    </div>
                    <div className="linksAllSecond">  
                        <a href="https://linkedin.com/in/lucasnaufal-queiroz9" className="socialLinks">linkedin</a>
                    </div>
            </div>
        </div>
    )
}