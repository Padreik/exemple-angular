let express = require('express');
let router = express.Router();
const todoController = require('../controllers/todoController');

router
    .route('/')
    .get(todoController.getAll)
    .post(todoController.create);

module.exports = router;
