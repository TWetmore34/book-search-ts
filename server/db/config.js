const mysql = require("mysql2")
const config = {
    mysql_pool: mysql.createPool({
            host: "localhost",
            user: "root",
            password: "password1234",
            database: "books_db"
    })
}

module.exports = config