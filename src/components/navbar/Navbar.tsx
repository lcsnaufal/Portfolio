import React from "react";
import "./Navbar.css";

export default function Navbar(){
    return(
        <div className="divFatherNavbar">
            <div className="title">
                <div className="lucas">Lucas Naufal</div>
                <div className="portfolio">Portfolio</div> 
            </div>
            <div className="links">
                <div className="icons">
                    <a href="https://github.com/lcsnaufal" className="socialLinks">github</a>
                </div>
                <div className="icons">
                    <a href="mailto:dev.naufall@gmail.com" className="socialLinks">gmail</a>
                </div>
                <div className="icons">
                    <a href="https://discord.gg/4czbQFxJZF" className="socialLinks">discord</a>
                </div>
            </div>
        </div>
    )
}