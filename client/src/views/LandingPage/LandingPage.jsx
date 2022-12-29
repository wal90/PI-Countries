import React from "react";
import { Link } from "react-router-dom";
import s from "./landingPage.module.css"

export default function LandingPage(){
    return(
        <div className={s.container}>
           <div className={s.contain}>
            <div className={s.text}>
                <p>WELCOME TO</p>
              <h1>COUNTRIES</h1>
            <Link to="/home">
                <button> Let's go!</button>
            </Link>  
            </div>
            
        </div> 
        </div>
        
    )
}