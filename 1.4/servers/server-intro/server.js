// const http = require('http')

// const server = http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' })
//     response.write('Hello, world')
//     response.end();
// })

// const port = 3000
// server.listen(port, function () {
//     console.log(`Node server created at port ${port}`)
// })

const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// const users = {
//     tilda: "You've done a wonderful job",
//     riva: "You need to improve your form, but good perseverance",
//     jeremy: "You're incredible"
// }

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})

// app.get('/maps', function (request, response) {
//     response.send("Here's some stuff related to maps")
// })

// app.get('/shoobi', function (request, response) {
//     response.send("This here is the shoobi *route*")
// })
// app.get('/life', function (request, response) {
//     response.send("42")
// })
// app.get('/landing/:username', function (request, response) {
//     response.send(`Hi there, ${request.params.username}`)
// })
// app.get('/user/:id', function (request, response) {
//     response.send(`Hi there, ${users[request.params.id]}`)
// })
// app.get('/q', (request, response) => {
//     let params = request.query
//     response.send(params)
// })
// app.get('/details', function(req, res){
//     let par1 = req.query
//     console.log(par1.city)
//     res.send(par1)
// })



app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
