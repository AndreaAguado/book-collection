import { Link } from 'react-router-dom';
import '../styles/layout/Book.scss';

const Book = (props) => {
    return (
        <li className="titles_list_item" key={props.book.id} id={props.book.id}>
            <Link className="titles_list_link" to={`/book-details/${props.book.id}`} title="Go to book page">
                {props.book.title}
            </Link>
        </li>
    )
}
export default Book;