const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    let token = req.cookies['SESSIONID'];
    jwt.verify(token, "asdfasdf", (err, payload) => {
        if (err) {
            res.status(403).send("JWT expiré");
        }
        else {
            req.payload = payload;
            next();
        }
    })
}

module.exports = verifyJWT;
