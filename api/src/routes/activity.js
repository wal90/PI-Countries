const { Router } = require("express")
const router = Router();
const { createActivity, changeActivity, deleteActivity} = require("../controllers")
const { validateActivity } = require("../middlewares")

router.post("/", validateActivity, createActivity)

router.put("/:id", changeActivity)

router.delete("/:id", deleteActivity)

module.exports = router;
