import { useEffect, useState } from "react";
import callToApi from '../services/callToApi.js';

const BookDetail = (props) => {
    const [bookToRender, setBookToRender] = useState({});
    useEffect(() => {
        callToApi.getBookById(props.clickedBook.id).then(response => {
            setBookToRender(response);
        })
    }, [props.clickedBook.id]);

    return (
        <section>
            <h2>Title: {bookToRender.title}</h2>
            <h3>Author: {bookToRender.author}</h3>
            <p>ISBN: {bookToRender.isbn}</p>
        </section>
    )
}
export default BookDetail;