import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../redux/actions";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import s from "./cards.module.css"

export default function Cards({currentCountries}){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

    return(
        <div className={s.allCards}>
            {
                currentCountries?.map((country)=>{
                    return(
                        <Fragment key={country.id}>
                            <Link to={"/country/" + country.id}>
                                <Card
                                image = {country.image}
                                name = {country.name}
                                continents ={country.continents}
                                population = {country.population}
                                />
                            </Link> 
                        </Fragment>
                        
                       
                    )
                }) 
            }

        </div>
    )
}