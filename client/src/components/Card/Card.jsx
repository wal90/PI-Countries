import React from "react";
import s from "./card.module.css"

export default function Card ({name,image, continents, population}){
    return(
        <div className={s.contain}>
            <img src={image} alt="countries flag" width={"300px"} />
            <div className={s.containText}>
               <h3>{name}</h3>
               <div className={s.text}>
                <h5>{continents}</h5>
                {/* <p>Continent <strong> </strong> </p> */}
                <div className={s.popu}>
                  <p>Population <strong>{population}</strong></p>   
                </div>
                
               </div>
            
            </div>
            
            
        </div>
    )
}