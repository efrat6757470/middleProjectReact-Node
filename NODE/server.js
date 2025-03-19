require("dotenv").config()
const express = require("express")
const cors=require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')

connectDB()

const mongoose = require('mongoose')
const PORT = process.env.PORT||1100
const app = express()


app.use(cors(corsOptions))
app.use(express.json())
app.use("/api/users",require("./routers/userRoute"))
app.use("/api/todos",require("./routers/todosRoute"))
app.use("/api/posts",require("./routers/postRoute"))


app.get('/', (req, res) => {
    res.send("This is the home page")
})

mongoose.connection.once('open', () => {
    console.log("connect to DB");
    app.listen(PORT, () => {
        console.log(`process is running in port: ${PORT}`);
    })
})

mongoose.connection.on('error', (err) => {
    console.log(err);
})