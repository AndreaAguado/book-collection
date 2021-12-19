const express = require('express');
const cors = require('cors');
const DataBase = require('better-sqlite3');
const req = require('express/lib/request');

// create server
const server = express();
const db = new DataBase('./src/data/database.db', { verbose: console.log });

// set express middleware
//   we must always put these lines, until we know what they do
//   more info: https://expressjs.com/es/guide/using-middleware.html
server.use(cors());
server.use(express.json());

// //EJS configuration
// server.set('view engine', 'ejs');

// init express aplication
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${serverPort}`);
});

// endpoints

// get all books 
server.get('/books', (req, res) => {
    const query = db.prepare('SELECT * from books');
    const books = query.all();
    res.json(books);
})

// get book by id 
server.get('/book/:id', (req, res) => {
    const query = db.prepare('SELECT * from books where id = ?');
    const book = query.get(req.params.id);
    const query2 = db.prepare('SELECT * from authors where id = ?');
    const author = query2.get(book.author);
    const response = {};
    response.id = book.id;
    response.name = book.name;
    response.isbn = book.isbn;
    response.author = author;
    res.json(response);
    // res.render('bookDetail', response);
});

// get all authors 
server.get('/authors', (req, res) => {
    const query = db.prepare('SELECT * from authors');
    const authors = query.all();
    res.json(authors);
})

// get author by id 
server.get('/author/:id', (req, res) => {
    const query = db.prepare('SELECT * from authors where id = ?');
    const author = query.get(req.params.id);
    res.json(author);
});

// create new author
server.post('/author', (req, res) => {
    const response = {};
    const query = db.prepare(
        'INSERT INTO authors (first_name, last_name) VALUES (?, ?)');
    const authorData = query.run(
        req.body.first_name,
        req.body.last_name
    );
    console.log(authorData);
    if (authorData.changes !== 0) {
        response.success = true;
    }
    else {
        response.success = false;
    }
    res.json(response);
})

// creates new book 

server.post('/book', (req, res) => {
    const response = {};
    // search for existing auhor in db
    const queryAuthorId = db.prepare('SELECT id from authors WHERE first_name = ? and last_name = ?');
    const authorId = queryAuthorId.get(req.body.first_name, req.body.last_name);
    let newAuthorId;
    console.log(authorId);
    if (authorId === undefined) {
        const queryAddAuthor = db.prepare(
            'INSERT INTO authors (first_name, last_name) VALUES (?, ?)');
        const authorData = queryAddAuthor.run(
            req.body.first_name,
            req.body.last_name
        );
        newAuthorId = authorData.lastInsertRowid;
    }
    else {
        newAuthorId = authorId.id;
    }
    const queryAddBook = db.prepare(
        'INSERT INTO books (name, isbn, author) VALUES (?, ?, ?)');
    const bookData = queryAddBook.run(
        req.body.name,
        req.body.isbn,
        newAuthorId
    );
    if (bookData.changes !== 0) {
        response.success = true;
    }
    else {
        response.success = false;
    }
    res.json(response);
})

// Update a book by id

server.put('/book/:id', (req, res) => {
    const query = db.prepare('UPDATE books set name = ?, isbn= ? where id = ?');
    const book = query.run(req.body.name, req.body.isbn, req.body.id);
    res.json(book);
})



// STATIC SERVER: listen files in public folder
const staticServerPath = './public'; // relative to the root of the project
server.use(express.static(staticServerPath));