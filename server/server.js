const express = require("express")
const app = express()
const PORT = 3003;
const dotenv = require("dotenv")
const routes = require("./routes/")

app.use(express.urlencoded({extended: false}))
app.use(express.json())
dotenv.config()


app.use(routes)
app.listen(PORT, () => {
    console.log("app running")
})