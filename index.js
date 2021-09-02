require("dotenv").config()

const express = require('express')
const cors = require('cors')

console.log("USER >>:", process.env.USER)
console.log("HOME>>>:", process.env.HOME)
console.log("PORT >>:", process.env.PORT)
console.log("SECRET >>: ", process.env.API_SECRET)

const PORT = process.env.PORT || 5000
const server = express()

server.use(express.json())
server.use(cors())


server.get('/', (req, res) => {
    res.send(`<h1>HEROKU  APP UNIT 4.1.4</h1>`)
})

//Send to build folder in react client
server.get('/api', (req, res) => {
    res.json({ message: 'HEROKU  APP UNIT 4.1.4' })
})

server.listen(process.env.PORT, () => {
    console.log(`listening on port ${PORT}`)
})