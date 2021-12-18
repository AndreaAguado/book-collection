import '../styles/layout/BookDetail.scss';
import SectionWrapper from './SectionWrapper';
import Form from './Form';

const BookDetail = (props) => {
    return (
        <>
            <section className="book_detail">
                <SectionWrapper classname="book_detail_info" section_name={`Title: ${props.bookToRender.title}`}>
                    <h3>Author: {props.bookToRender.author}</h3>
                    <p>ISBN: {props.bookToRender.isbn}</p>
                </SectionWrapper>
                <SectionWrapper classname="update_book" section_name="Update book info">
                    <Form handleInput={props.handleInput}></Form>
                </SectionWrapper>
            </section>
        </>

    )
}
export default BookDetail;