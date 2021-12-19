
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
            return {
                id: response.id,
                title: response.name,
                author: `${response.author.first_name} ${response.author.last_name}`,
                isbn: response.isbn
            }
        })
}

const addNewBook = (data) => {
    console.log(JSON.stringify(data));
    return fetch('/book', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            return response;
        })

}

const updateBook = (id, data) => {
    return fetch(`/book/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            return response;
        })
}

const objectToExport = {
    getAllBooks: getAllBooks,
    getBookById: getBookById,
    addNewBook: addNewBook,
    updateBook: updateBook
}

export default objectToExport;