import React from "react";
import { Link } from "react-router-dom";
import s from "./error404.module.css"

export default function Error(){
    return(
        <div className={s.container}>
            <div>
              <h6>ERROR 404 · PAGE NOT FOUND</h6>  
            </div>
            
            <p>4</p>
           <div className={s.contain}>
           </div>
           <div className={s.second}>
            <p >4</p>
           </div>
           <div className={s.text}>
            <p>Oops! the page you requested<br></br> could not be found</p>
           </div>
           <div className={s.btn}>
            <Link to="/home">
                <button> Return to home </button>
            </Link> 
           </div>
            
           {/* <div className={s.text}>
                <p>WELCOME TO</p>
              <h1>COUNTRIES</h1>
              
            </div> */}
            
        
        </div>
        
    )
}