const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
const PORT = 3003;
const dotenv = require("dotenv")
const routes = require("./routes/")
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
dotenv.config()


app.use(routes)
app.listen(PORT, () => {
    console.log("app running on " + PORT)
})