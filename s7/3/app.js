const express = require('express')
const Book = require('./Book')
const app = express()
const port = 3000


const bookRouter = express.Router()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', bookRouter)


let books = [new Book(1, "Dune", "sf", "Frank Herbert"),
new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
new Book(3, "Foundation", "sf", "Asimov")]

bookRouter.route('/books')
    //Step 1 - GET request
    .get((req, res) => {
        let filteredBooks = [];
        if (req.query.genre) {
            filteredBooks = books.filter(x => x.genre === req.query.genre)
        }
        else {
            filteredBooks = books;
        }
        res.json(filteredBooks);
    })

    //Step 2 - POST request
    .post((req, res) => {
        let newBook = new Book(req.body.id, req.body.name, req.body.genre, req.body.author);

        books.push(newBook);
        console.log(books);
        return res.json(newBook);
    })
//Step 3 - PUT request  //(imi da eroare)
bookRouter.route('/books/:bookId')
    .put((req, res) => {
        let bookModif = books.find(e => e.id === Number(req.params.bookId))
        //bookModif.name = req.body.name
        bookModif.genre = req.body.genre
        bookModif.author = bookModif.author
        return res.json(bookModif)
    })


app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

app.listen(port, () => {
    console.log('Running on the port ' + port)
})