const { Router } = require("express");
const { getCountries, getById, getContinents } = require("../controllers");
const router = Router();


router.get ("/", getCountries);

router.get ("/:id", getById);

router.get("/country/continents", getContinents);


module.exports = router;