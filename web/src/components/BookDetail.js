import '../styles/layout/BookDetail.scss';
import SectionWrapper from './SectionWrapper';

const BookDetail = (props) => {
    return (
        <SectionWrapper classname="book_detail" section_name={`Title: ${props.bookToRender.title}`}>
            <h3>Author: {props.bookToRender.author}</h3>
            <p>ISBN: {props.bookToRender.isbn}</p>
        </SectionWrapper>
    )
}
export default BookDetail;