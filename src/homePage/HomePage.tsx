import React from "react";
import "./HomePage.css";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/content/Content";


export default function HomePage(){
    return(
        <div>
            <Navbar/>
            <Content/>
        </div>
    )
}