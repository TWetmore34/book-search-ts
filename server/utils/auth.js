const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
    const token = req.cookies.jwtToken
    if(!token) return res.status(401).json("Not authorized")

    jwt.verify(token, process.env.PASSWORD_ENCRYPT, (err, data) => {
        if(err) {
            return res.status(401).json(err)
        }
        req.body.user = data
    })
    next();
}
module.exports = auth