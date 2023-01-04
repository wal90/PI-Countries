const axios = require("axios")
const { Country, Activity} = require("../db")
const { Op } = require("sequelize")


const getAllCountries= async ()=>{
    const allApi = await axios.get("https://restcountries.com/v3.1/all")
    const apiToDb = await Country.findAll(
        {include:{model: Activity,
                attributes:  ["name"],
                through: { attributes: [] }
                } }
    )

    if(!apiToDb.length){
        await Country.bulkCreate(allApi.data.map( c =>{
            return{
            id: c.cca3 ? c.cca3 : c.cioc,
            name: c.name.common,
            image: c.flags.svg,
            continents: c.continents[0],
            capital: c.capital != null ? c.capital[0] : "Not found",
            subregion: c.subregion,
            area: c.area,
            population: c.population
    } }))  
 
       
  
}return apiToDb
}


const findCountry = async (name) => {
const search =  await Country.findAll({
        where: {
            name: {
                [Op.iLike]: "%" + name + "%"
            },
        },
        include:{
            model: Activity,
            attributes:  ["name", "difficulty", "duration", "season"],
            through: { attributes: [] }
        }
        ,
         order: [["name", "ASC"]],
    })

const res = !search.length ? "Country not found" : search 
return res

}

const findCountryById = async (id) => {

        return await Country.findByPk(id.toUpperCase(), {
        include:{
            model: Activity,
            attributes:  ["name", "difficulty", "duration", "season"],
            through: { attributes: [] }
        }
    })  
  
    
}

const getAllActivities = async () => {
    return await Activity.findAll({
        include:{
            model: Country,
            attributes: ["name"],
            through: { attributes: []}
        }
    })
}


const getAllContinents = async () =>{
    const countries = await Country.findAll();
    const continents = new Set(countries.map((c) => c.continents))
    let allContinents = [];
    continents.forEach(c => allContinents.push(c))
    return allContinents
}





module.exports = {
    getAllCountries,
    findCountry,
    findCountryById, 
    getAllActivities,
    getAllContinents
}