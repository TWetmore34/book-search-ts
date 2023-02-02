const router = require("express").Router()
const mySqlConfig = require("../db/config").mysql_pool;
const wishlist = {}
router.get("/", (req, res) => {
    const sql =`SELECT * FROM book where user_id = ${req.body.user.id};`
    mySqlConfig.getConnection((err, connection) => {
        connection.query(sql, (err, wishlistEntries) => {
            res.json(wishlistEntries)
        })
    })
})

router.post("/", (req, res) => {
    const sql = `INSERT INTO book(title, id, user_id) VALUES("${req.body.title}", "${req.body.id}", ${req.body.user.id});`
    mySqlConfig.getConnection((err, connection) => {
        if(err) res.json(err)
        connection.query(sql, (err, wishlistEntries) => {
            if(err) res.json(err)
            res.json(wishlistEntries)
        })
    })
})

// router.put("/", (req, res) => {
//     wishlist[req.body.id] = req.body
//     res.json(wishlist)
// })

router.delete("/", (req, res) => {
    const sql = `DELETE FROM book WHERE title = "${req.body.title}"`
    mySqlConfig.getConnection((err, connection) => {
        if(err) res.status(500).json(new Error("db connection refused"))
        connection.query(sql, (err, response) => {
            if(err) res.status(404).json(new Error("book not found"))
            res.status(200).json({msg: "book removed", response})
        })
    })
})

module.exports = router;