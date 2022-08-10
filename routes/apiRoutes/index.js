// add middleware
const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes');
router.use(notesRoutes);
// exxports routes
module.exports = router;
// 