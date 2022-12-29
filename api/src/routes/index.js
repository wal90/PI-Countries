const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countriesRouter = require('./countries.js')
const activitiesRouter = require('./activities.js')
const activityRouter = require('./activity.js')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countriesRouter);
router.use('/activities', activitiesRouter)
router.use('/activity', activityRouter)


module.exports = router;
