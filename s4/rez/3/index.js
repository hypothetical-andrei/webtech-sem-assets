let express = require('express')
let cors = require('cors')

let app = express()
let router = express.Router()
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(express.json())

app.use('/api', router)

const people = [
    { id: 1, name: "Ionuț", age: 25 },
    { id: 2, name: "Alex", age: 18 },
    { id: 3, name: "Mihai", age: 13 },
    { id: 4, name: "Marcel", age: 12 },
    { id: 5, name: "Marius", age: 22 }
]

router.route('/people').get((req, res) => {
    res.json(array)
})

router.route('/people').post((req, res) => {
    let el = req.body
    el.id = array.length + 1
    array.push(el)
    res.json(el)
})

router.route('/people/:pid').get((req, res) => {
    let existing = people.find(e => e.id === parseInt(req.params.pid))
    if (existing) {
        res.status(200).json(existing)
    } else {
        res.status(404).json({ status: 'not found' })
    }
})



let port = 8000
app.listen(port)
console.log("Api is running")