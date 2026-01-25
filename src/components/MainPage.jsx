import React, {useState} from "react";
import {Link} from "react-router-dom";
import Header from "./Header";


export default function MainPage() {
    return(
        <>
        <Header />
        <div className="intro">
            <h1>HEY, I’M KHUSHI VERMA</h1>
            <img src="/port-image.png" alt="Image of Khushi Verma"/>
        </div>
        <div className="one-liner"></div>
        <div className="carousel"></div>
        <div className="timeline"></div>
        </>
    );
}