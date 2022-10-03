const express = require('express')
const mongoose = require('mongoose')
const auth = require('./routes/auth')
require('./passport/passport')
const app = express()

//connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/passport', () => {
    console.log("DB CONNECTED");
})

app.set('view engine', 'ejs')
app.use("/auth", auth)

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(4000, () => console.log(`Server is running at PORT 4000...`))