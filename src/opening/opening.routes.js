const router = require('express').Router();
const controller = require('./opening.controller');

router.get("/opening/:id", controller.getById);
router.get("/openings", controller.getAll);

module.exports = router;