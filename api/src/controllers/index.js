require("dotenv").config();
const {getAllCountries, findCountry, findCountryById, getAllActivities, getAllContinents} = require("../utils")
const { Country, Activity} = require("../db")


const getCountries = async (req, res)=>{
    try {
        const { name } = req.query;
        const all= await getAllCountries()
        let result = name ? await findCountry(name) : all 
        res.status(200).send(result)

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getById = async (req, res) =>{
    try {
        const {id} = req.params;
        let resultId = await findCountryById(id)
        resultId === null ? res.status(400).json({error: `id ${id} not found`}) :
        res.status(200).send(resultId) 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const createActivity = async (req, res) =>{
    try {
        const difficulty = parseInt(req.body.difficulty)
        const duration = parseInt(req.body.duration)
        
        const { name, season, countries } = req.body
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })

        countries.map(async(id)=>{
            const idCountry = id.toUpperCase()
            const country = await Country.findOne({
              where: {
                id:  idCountry
                     }
            })
        newActivity.addCountry(country)
        })
        res.status(200).json({ success: "Activity created" });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getContinents = async (req, res) => {
    try {
        const countries = await getAllContinents();
        // const continents = new Set(countries.map((c) => c.continents))
       

        res.status(200).send(countries)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getActivities = async (req, res) =>{
    try {
        const activity = await getAllActivities()
        res.status(200).send(activity)
    } catch (error) {
        res.status(400).send(error)
    }
}

const changeActivity = async( req, res) =>{
    const id = req.params.id
    const activity = req.body

    try {
        let act = await Activity.update(activity,{
            where:{
                id: id
            }
        })
        return res.json({ Changed: true})
    } catch (error) {
        res.status(400).send(error)
    }
}

const deleteActivity = async (req,res)=>{
    const id = req.params.id

    try {
        let acti = await Activity.destroy({
            where:{
                id:id
            }
        })
        return res.json( {Delete:true} )
    } catch (error) {
        res.status(400).send(error)
    }
}



module.exports = {
    getCountries,
    getById,
    createActivity,
    getContinents,
    getActivities,
    changeActivity,
    deleteActivity

}