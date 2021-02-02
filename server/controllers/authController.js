import Bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

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
    Bcrypt.compareSync(req.body.password, user.password);
    const jwtBearerToken = jwt.sign({ admin: false }, "asdfasdf", { expiresIn: 604800 });
    res.cookie("SESSIONID", jwtBearerToken, { httpOnly: true });

}
