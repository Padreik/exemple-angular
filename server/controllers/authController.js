const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * @param req {Request}
 * @param res {Response}
 */
function register(req, res) {
    Bcrypt.hashSync(req.body.password);
}

/**
 * @param req {Request}
 * @param res {Response}
 */
function login(req, res) {
    // Select du user
    //Bcrypt.compareSync(req.body.password, user.password);
    const jwtBearerToken = jwt.sign({ admin: false }, "asdfasdf", { expiresIn: 120 });
    res.cookie("SESSIONID", jwtBearerToken, { httpOnly: true });
    res.send();

}

module.exports = {login};
