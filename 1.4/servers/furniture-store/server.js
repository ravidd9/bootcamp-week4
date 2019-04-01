const express = require('express')
const path = require('path')
const app = express()

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]
// app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', function(request, response){
    response.send("Server is up and running smoothly")
})
app.get('/priceCheck/:name', function(request, response){
    n1 = request.params.name
    // response.send(store[0][name])
    response.send(store.find(fur => fur["name"] == n1).price.toString())
})

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})