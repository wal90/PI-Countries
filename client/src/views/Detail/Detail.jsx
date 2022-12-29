import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../redux/actions";
import s from "./detail.module.css"
import Loading from "../../components/Loading/Loading";

export default function Detail (props){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[])

    const myCountry = useSelector((state)=> state.detail)
    return(
        <div>
            {
                myCountry.hasOwnProperty("name") ?
                <div  className={s.containD}>
                   
                      <div className={s.detailsI} >
                        <h1>{myCountry.name}</h1>
                        <img src={myCountry.image }alt="flag country" width={"470px"} />
                        <p>capital</p>
                        <h3>{myCountry.capital}</h3>
                        {/* <h5>continent: {myCountry.continents}</h5>   */}


                        
                    </div>
                    <div className={s.details} >
                        <p>· continet: {myCountry.continents}</p>
                        <p>· subregion: {myCountry.subregion}</p>
                        <p>· code: {myCountry.id} </p>
                        <p>· area: {myCountry.area} km2</p>
                        <p>· population: {myCountry.population}</p>  
                        
                        {myCountry.Activities.length? myCountry.Activities.map(c=>
                            <div key={c.name} className={s.ac}>
                                <p>· Activity name: {c.name}</p>
                                <p>Difficulty: {c.difficulty}</p>
                                <p>Duration: {c.duration}</p>
                                <p>Season: {c.season}</p>
                            </div>): 
                            <div> <p>· Activity: not found</p></div>}
                        

                    </div>  

                    <div >
                            <Link to='/home' className={s.link}>
                                <button>Back</button>
                            </Link>
                     </div>
                   
                    
                   
                </div>
                : <Loading/>
            }
        </div>
    )
}