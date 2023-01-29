const mysql = require("mysql2")
const config = {
    mysql_pool: mysql.createPool({
            host: "localhost",
            user: "root",
            password: process.env.DB_CONNECTION,
            database: "books_db"
    })
}

module.exports = config