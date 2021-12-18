
const getAllBooks = () => {
    return fetch('/books')
        .then(response => response.json())
        .then(response => {
            console.log(response);
            return response.map((book) => {
                return {
                    id: book.id,
                    title: book.name
                }
            })
        })
}


const getBookById = (id) => {
    return fetch(`/book/${id}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            return {
                id: response.id,
                title: response.name,
                author: response.author.first_name + response.author.last_name,
                isbn: response.isbn
            }
        })
}

const objectToExport = {
    getAllBooks: getAllBooks,
    getBookById: getBookById
}

export default objectToExport;