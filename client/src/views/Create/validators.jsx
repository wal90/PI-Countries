export default function validate(input) {
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
    if(!input.season){
        errors.season = "Season is required";
    } 
    if(input.season > 1){
        errors.season = "Choose only one";
    } 
     if (!input.countries.length){
        errors.countries= "Select at least one country"
    }
   
    
   
    return errors;
  }