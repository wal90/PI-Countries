import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getByName } from "../../redux/actions";
import s from "./searchBar.module.css"

export default function SearchBar (){

    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        // if(name !== e.target.value) alert('Country not found')
        dispatch(getByName(name))
        
    
    }


    return(
        <div className={s.in}>

            <input
             type="text"
             placeholder="Search Country" 
             onChange={(e)=>handleInputChange(e)}
             />
             
             <button
             type="submit"
             onClick={(e)=>handleSubmit(e)}> 
             Search</button>
        </div>
    )
}