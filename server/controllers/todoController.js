
let todos = [
    {
        name: "Apprendre Angular",
        done: false
    },
    {
        name: "Apprendre Express",
        done: false
    },
    {
        name: "Pleurer",
        done: false
    }
];

/**
 * @param req {Request}
 * @param res {Response}
 */
function getAll(req, res) {
    res.json(todos);
    //res.status(204).end();
    //res.status(400).send('Le username existe déjà');
}

/**
 * @param req {Request}
 * @param res {Response}
 */
function create(req, res) {
    todos.push(req.body);
    res.status(201).end();
}

module.exports = {getAll, create};
