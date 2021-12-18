import { useEffect } from "react";
import callToApi from '../services/callToApi.js';

const BookDetail = (props) => {
    useEffect(() => {
        callToApi.getBookById(props.clickedBook.id).then(response => {

        })
    });

    return (
        <h2>hola mundo</h2>
    )
}
export default BookDetail;