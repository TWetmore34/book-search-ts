const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
    if(!req.headers["authorization"]) {
        return res.status(401).json(new Error("Not Authorized"))
    }
    const token = req.headers["authorization"].split(" ")[1]
    if(!token) return res.status(401).json("Not authorized")
    jwt.verify(token, process.env.PASSWORD_ENCRYPT, (err, data) => {
        if(err) {
            res.redirect("/")
            return res.status(401).json(err)
        }
        req.body.user = data
    })
    next();
}
module.exports = auth