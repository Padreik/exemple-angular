const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: String,
    done: {type: Boolean, default: false}
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
