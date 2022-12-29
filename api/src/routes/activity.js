const { Router } = require("express")
const router = Router();
const { createActivity} = require("../controllers")
const { validateActivity } = require("../middlewares")

router.post("/", validateActivity, createActivity)

module.exports = router;
