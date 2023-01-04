import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Cards from "../../components/Cards/Cards";
import Paginated from "../../components/Paginated/Paginated"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getCountries, orderByName, orderByPopulation, filterByContinent, filterByActivity, getActivities } from "../../redux/actions";
import s from "./home.module.css"
import Loading from "../../components/Loading/Loading";

export default function Home (){



    const dispatch = useDispatch()
    const allCountries = useSelector((state)=>state.countries)
    const allActivities = useSelector((state)=> state.activities)
    console.log(allActivities)
    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPages] = useState(9);
    const indexOfLastItem = currentPage * itemsPerPages;
    const indexOfFirstItem = indexOfLastItem - itemsPerPages;
    const currentCountries = allCountries.slice(indexOfFirstItem, indexOfLastItem)
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);




    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getActivities())
    },[dispatch])

    function handleSort(e){
        dispatch(orderByName(e.target.value))
        setOrder(`ordenado ${e.target.value}`)
    }

    function handleOrderByPopulation(e){
        dispatch(orderByPopulation(e.target.value))
        setOrder(`ordenado ${e.target.value}`)
    }

    function handleContinents(e){
        dispatch(filterByContinent(e.target.value))
        setCurrentPage(1)
    }

    function handleActivity(e){
        dispatch(filterByActivity(e.target.value))
        setCurrentPage(1)
    }

    // const changePage = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    //   };


    return(
        <div className={s.containerHome}>
            <div>
                <NavBar/>
             </div>    
                
           
            <div className={s.sel}>
                <select onChange={e=>handleSort(e)}>
                    <option defaultValue>ORDER BY NAME</option>
                    <option value="asc">NAME BY A-Z </option>
                    <option value="des">NAME BY Z-A </option>
                </select>

                <select onChange={(e) => handleOrderByPopulation(e)}>
                    <option defaultValue> ORDER BY POPULATION </option>
                    <option value="more">MORE POPULATED</option>
                    <option value="less">LESS POPULATED</option>
                </select>

                <select onChange={handleContinents}>
        
                    <option value="All">ALL COUNTRIES</option>
                    <option value="North America">NORTH AMERICA</option>
                    <option value="South America">SOUTH AMERICA</option>
                    <option value="Africa">AFRICA</option>
                    <option value="Europe">EUROPE</option>
                    <option value="Asia">ASIA</option>
                    <option value="Oceania">OCEANIA</option>
                    <option value="Antarctica">ANTARCTICA</option>
                </select>

                <select onChange={(e) => handleActivity(e)}>
                    <option value="All">Activities</option>
                    {
                        allActivities.map((c)=>(
                            <option key={c.id} value={c.name}>{c.name}</option>
                        ))
                    }
                </select>


            </div>
            { allCountries.length ?
            <div>
               <div>
                <Paginated
               allCountries={allCountries} 
               itemsPerPages={itemsPerPages} 
               setCurrentPage={setCurrentPage}
            currentPage={currentPage}

                />
            </div>
           
     
            <div>
               <Cards currentCountries={currentCountries}/> 
            </div> 
            </div> : <Loading/>
            }
            
        </div>
    )
}