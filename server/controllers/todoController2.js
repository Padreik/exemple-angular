class todoController {

    /**
     * @param req {Request}
     * @param res {Response}
     */
    getAll(req, res) {
        res.json([
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
        ]);
    }
}

module.exports = todoController;
