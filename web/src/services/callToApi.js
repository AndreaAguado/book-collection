
const getAllBooks = () => {
    return fetch('/books')
        .then(response => response.json())
        .then(response => {
            console.log(response);
            return response.map((book) => {
                return {
                    title: book.name
                }
            })
        })
}

const objectToExport = {
    getAllBooks: getAllBooks
}

export default objectToExport;