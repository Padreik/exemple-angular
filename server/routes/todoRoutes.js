let express = require('express');
let router = express.Router();
const todoController = require('../controllers/todoController');
const verifyJWT = require('../middleware/verifyJWT');

router
    .route('/')
    .get(todoController.getAll)
    .post(verifyJWT, todoController.create);

module.exports = router;
