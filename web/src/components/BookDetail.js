import '../styles/layout/BookDetail.scss';
import SectionWrapper from './SectionWrapper';
import Form from './Form';
import { Link } from 'react-router-dom';

const BookDetail = (props) => {
    return (
        <>

            <section className="book_detail">
                <div>
                    <SectionWrapper classname="book_detail_info" section_name={`Title: ${props.bookToRender.title}`}>
                        <h3>Author: {props.bookToRender.author}</h3>
                        <p>ISBN: {props.bookToRender.isbn}</p>
                    </SectionWrapper>
                    <nav className="return_link_container">
                        <Link to="/" className="return_link" title="Go to homepage">
                            <i class="return_link_icon fas fa-chevron-circle-left"></i>
                            <p className="return_link_title">Return</p>
                        </Link>
                    </nav>
                </div>

                <SectionWrapper classname="update_book" section_name="Update book info">
                    <Form handleInput={props.handleInput}></Form>
                </SectionWrapper>
            </section>
        </>

    )
}
export default BookDetail;