import React,{useState, useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { getCountries, postActivity} from "../../redux/actions.js";
import s from "./create.module.css";
import { Link } from "react-router-dom";


function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z]+$/.test(input.name)) {
        errors.name = "Invalid name. The name must contain letters";}
    if (!input.difficulty){
        errors.difficulty = "Difficulty is required"
    } if (input.difficulty < 1 && input.difficulty > 5){
        errors.difficulty =  "Difficulty must be between 1 and 5"
    }
    if (!input.duration) {
      errors.duration = "Duration is required";
    } 
    if(!input.season.length){
        errors.season = "Season is required";
    } 
     if (!input.countries.length){
        errors.countries= "Select at least one country"
    }
   
    
   
    return errors;
  }

export default function Create (){

    const dispatch = useDispatch()
    const countries = useSelector((state)=>state.countries);
    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name:"",
        difficulty:1,
        duration:1,
        season:"", 
        countries:[]
     
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
         postActivity(input);
        alert("Activity created")
         console.log(input)
        setInput({
            name:"",
            difficulty:1,
            duration:1,
            season:"", 
            countries:[]
        })


    }

     function handleCheck(e){
        if(e.target.checked){
            setInput({
                ...input,
                season: e.target.value
            })
        }
    }

    function handleSelect(e){
        setInput({
            ...input,
            countries:[...input.countries, e.target.value]
        })
    }

    function handleDelete(el){
        setInput({
            ...input,
            countries: input.countries.filter(c=> c!== el)
        })
    }

  


    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

    return(
        <div className={s.containerCreate}>

        <div className={s.formTotal}>
             <Link to='/home' className={s.link}><button>Back</button></Link>
        <div className={s.formulario}>
            
           <form   onSubmit={e => handleSubmit(e)}>
            <div>
               <h2>CREATE ACTIVITY</h2> 
           </div>
            <div  className={s.sInput}>
                <label>Name: </label>
                <input 
                type="text"
                value={input.name}
                name="name"
                onChange={(e)=>handleChange(e)}
                 />
                {errors.name &&(
                    <p className={s.error}>{errors.name}</p>
                )}
            </div>
            <div  className={s.sInput}>
                <label>Difficulty: </label>
                <input 
                type="range"
                value={input.difficulty}
                min="1"
                max="5" 
                name="difficulty"
                onChange={(e)=>handleChange(e)}
                 />
                {errors.difficulty ? (
                        <p className={s.error}>{errors.difficulty}</p> 
                      ) :  <p className={s.data}>{input.difficulty}</p>}
            </div>
            <div  className={s.sInput}>
                <label>Duration: </label>
                <input 
                type="number"
                value={input.duration}
                name="duration"
                min="1" 
                max="24" 
                onChange={(e)=>handleChange(e)}
                 />
                 {errors.duration &&(
                    <p className={s.error}>{errors.duration}</p>
                )}
            </div>
            <div >
                <label className={s.sInputs}> Season:</label>
                <label  className={s.sIn}><input
                 type="checkbox"
                 value="summer"
                 name="summer" 
                 onChange={(e)=>handleCheck(e)}/>Summer </label>
                <label className={s.sIn}><input
                 type="checkbox"
                 value="autumn"
                 name="autumn"
                 onChange={(e)=>handleCheck(e)} />Autumn </label>
                <label className={s.sIn}><input
                 type="checkbox"
                 value="winter"
                 name="winter"
                 onChange={(e)=>handleCheck(e)} />Winter </label>
                 <label className={s.sIn}><input
                 type="checkbox"
                 value="spring"
                 name="spring"
                 onChange={(e)=>handleCheck(e)} />Spring </label>
               
            </div>
            <div></div>
            <div className={s.sInputS}>
                <label>Select country: </label>
                <select onChange ={(e)=>handleSelect(e)}>
                    {
                        countries.map((c)=>(
                            
                            <option key={c.name} name="countries"  value={c.id}>{c.name}</option>
                         )) 
                      
                    }
                </select>
              
                {input.countries.map(el =>
                        <div  key={el.toString()} className={s.type}>
                            <p>{el}</p> <button type="button" onClick={()=>handleDelete(el)}>x</button> 
                        </div>  
                      
                      )}
                
            </div>
            <div className={s.create}>
                {/* {errors.name || 
                errors.difficulty || 
                errors.duration || 
                errors.season || 
                errors.countries ?
                <button disabled>Create Activity</button>
                : */}
                <button type="submit">Create Activity</button>
                {/* } */}
               
            </div>


           </form>
        </div>
        </div>
        </div>
    )
}