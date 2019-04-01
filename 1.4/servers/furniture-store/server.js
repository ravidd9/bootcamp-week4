const express = require('express')
const path = require('path')
const app = express()

let store = [{
        name: "table",
        inventory: 3,
        price: 800
    },
    {
        name: "chair",
        inventory: 16,
        price: 120
    },
    {
        name: "couch",
        inventory: 1,
        price: 1200
    },
    {
        name: "picture frame",
        inventory: 31,
        price: 70
    }
]
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', function (request, response) {
    response.send("Server is up and running smoothly")
})
app.get('/priceCheck/:name', function (request, response) {
    n1 = request.params.name
    let val
    if (store.find(fur => fur["name"] == n1)) {
        val = store.find(fur => fur["name"] == n1).price
    } else {
        val = null
    }
    let p = {
        price: val
    }
    response.send(p)
})
app.get('/buy/:name', function (request, response) {
    n1 = request.params.name
    if (store.find(fur => fur["name"] == n1)) {
        store.find(fur => fur["name"] == n1).inventory--
    }
    response.send(store.find(fur => fur["name"] == n1))
})
app.get('/sale/', function (request, response) {
    console.log(request.query.admin)
    if (request.query.admin == "true") {
        for(let fur of store){
            if(fur.inventory > 10){
                fur.price /=2
            }
        }
    }
    response.send(store)

})

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})