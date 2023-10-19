import jwt from 'jsonwebtoken';
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    // token
    const accessToken = req.headers.authorization?.split(' ')[1];

    if (!accessToken) return res.status(401).json({
        err: 1,
        msg: 'Missing access token!'
    });

    jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(401).json({
            err: 1,
            msg: 'Access token exprired!'
        });

        req.user = user;

        next();
    });
}

export default verifyJWT;