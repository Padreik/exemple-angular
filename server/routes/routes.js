let express = require('express');
let router = express.Router();
let todoRoutes = require('./todoRoutes');

router.use('/todo', todoRoutes);

module.exports = router;
