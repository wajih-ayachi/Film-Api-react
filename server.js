const express = require('express')
const cors = require('cors')


const app = express()
var corOptions = {
    origin : "https://localhost:3001"
}
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/MovieRouter.js')
app.use('/api/movies', router)


//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})