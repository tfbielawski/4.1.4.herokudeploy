require("dotenv").config()
//for deploying react app
//const path = require("path")
const express = require('express')
const cors = require('cors')

// console.log("USER >>:", process.env.USER, "HOME>>>:", process.env.HOME)
// console.log("PORT >>:", process.env.PORT, "SECRET >>: ", process.env.API_SECRET)

console.log("USER >>:", process.env.USER)
console.log("HOME>>>:", process.env.HOME)
console.log("PORT >>:", process.env.PORT)
console.log("SECRET >>: ", process.env.API_SECRET)

const PORT = process.env.PORT || 5000
const server = express()

server.use(express.json())
server.use(cors())
//Join the react app
//server.use(express.static(path.join(_dirname, "client/build")))

server.get('/', (req, res) => {
    res.send(`<h1>Web 45 ROCKS!</h1>`)
})

//Send to build folder in react client
// server.get("*", (req,res) => {
//     res.sendFile(path.join(_dirname, "client/build", "index.html"))
// })
server.get('/api', (req, res) => {
    res.json({ message: 'Web 45 is awesome!' })
})

server.listen(process.env.PORT, () => {
    console.log(`listening on port ${PORT}`)
})