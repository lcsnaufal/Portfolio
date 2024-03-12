import React from "react";
import "./Navbar.css";

export default function Navbar(){
    return(
        <div className="divFather">
            <div className="title">
                <div className="lucas">Lucas Naufal</div>
                <div className="portfolio">Portfolio</div>
            </div>
            <div className="links">
                <div className="icons">
                    <a href="https://github.com/lcsnaufal" className="a">git</a>
                </div>
                <div className="icons">gmail</div>
                <div className="icons">discord</div>
            </div>
        </div>
    )
}