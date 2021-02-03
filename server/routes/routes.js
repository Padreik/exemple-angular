let express = require('express');
let router = express.Router();
let todoRoutes = require('./todoRoutes');
let authRoutes = require('./authRoutes');

router.use('/todo', todoRoutes);
router.use('/auth', authRoutes);

module.exports = router;
