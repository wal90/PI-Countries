const { Router } = require("express")
const router = Router();
const { getActivities} = require("../controllers")


router.get("/", getActivities)


module.exports = router;
