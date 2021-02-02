const mongoose = require('mongoose');

require('../models/todo');
const Todo = mongoose.model('Todo');

/**
 * @param req {Request}
 * @param res {Response}
 */
function getAll(req, res) {
    Todo.find().exec((err, todos) => {
        res.json(todos);
    });
    //res.json(todos);
    //res.status(204).end();
    //res.status(400).send('Le username existe déjà');
}

/**
 * @param req {Request}
 * @param res {Response}
 */
function create(req, res) {
    let newTodo = new Todo(req.body);
    newTodo.save(err => {
        if (err) {
            res.status(400).send('asdf');
        }
        res.status(201).end();
    });
}

function update(req, res) {
    Todo.findOne(req.body.id).exec((err, todo) => {
        todo.done = true;
        todo.save();
    });


    //Todo.updateOne({id: req.body.id}, {done: true});
}

function deletee(req, res) {
    Todo.findOne(req.body.id).exec((err, todo) => {
        todo.delete();
    });


    /*Todo.deleteOne({id: req.body.id}, null, err => {

    });*/
}

module.exports = {getAll, create};
