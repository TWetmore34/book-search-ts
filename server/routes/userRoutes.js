const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const mySqlConfig = require("../db/config").mysql_pool;
const auth = require("../utils/auth")
router.get("/testUsers", (req, res) => {
    mySqlConfig.getConnection((err, response) => {
        response.query("SELECT * FROM users;", (err, response) => {
            res.json(response)
        })
    })
})

router.post("/", (req, res) => {
    const newUser = {
        username: req.body.username,
        password: new CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_ENCRYPT).toString()
    }
    const SQL = `INSERT INTO users(username, password) VALUES("${newUser.username}", "${newUser.password}");`
    try {
        mySqlConfig.getConnection((err, connection) => {
            if (err) res.status(500).json(new Error(err))
            connection.query(SQL, (err, response) => {
                if(err) {
                    if(err.errno === 1062) return res.status(500).json(new Error("username already exists"))
                    
                    res.status(500).json(new Error(err))
                }
                if(response) {
                    const token = jwt.sign(
                        {username: newUser.username, id: response.insertId},
                        // 1000 ms * 60 = 1min * desired minutes
                        process.env.PASSWORD_ENCRYPT, {expiresIn: 1000 * 60 * 10}
                    )
                
                    res.status(200).json(token)
                }
            })
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/login", (req, res) => {
    const sql = `SELECT * FROM users WHERE username = "${req.body.username}"`
    mySqlConfig.getConnection((err, response) => {
        if(err) res.status(500).json(err)
        response.query(sql, (err, user) => {
            if(err) res.status(500).json(err)
            if(user.length === 0) res.status(404).json("user not found")
            const decrypted = CryptoJS.AES.decrypt(user[0].password, process.env.PASSWORD_ENCRYPT).toString(CryptoJS.enc.Utf8)
            if(decrypted === req.body.password) {
                const token = jwt.sign(
                    {username: req.body.username, id: user[0].id},
                    // 1000 ms * 60 = 1min * desired minutes
                    process.env.PASSWORD_ENCRYPT, {expiresIn: 1000 * 60 * 10}
                )
            
                res.status(200).json({token})
            }
        })
    })
})

router.get("/", auth, (req, res) => {
    const user = req.body.user
    if(user) {
        return res.status(200).json(user)
    }
    res.status(404).json("user not found")
})


module.exports = router