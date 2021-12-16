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

// init express aplication
const serverPort = 3000;
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

// STATIC SERVER: listen files in public folder
const staticServerPath = './public'; // relative to the root of the project
server.use(express.static(staticServerPath));