import { Link } from 'react-router-dom';
import '../styles/layout/Book.scss';

const Book = (props) => {
    return (
        <li key={props.book.id} id={props.book.id}>
            <Link to={`/book-details/${props.book.id}`}>
                <p>{props.book.title}</p>
            </Link>
        </li>
    )
}
export default Book;