import React from "react";
import SearchBar from "../Search Bar/SearchBar";
import { Link } from "react-router-dom"
import s from "./navBar.module.css"

export default function NavBar (){
    return(
        <div className={s.nav}>
            <ul>
                <li> <h1> COUNTRIES</h1></li>
                <SearchBar/>
                <li><Link to="/activity">CREATE ACTIVITY</Link></li>

            </ul>
        </div>
    )
}