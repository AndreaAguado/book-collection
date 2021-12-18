
const BookDetail = (props) => {
    return (
        <section>
            <h2>Title: {props.bookToRender.title}</h2>
            <h3>Author: {props.bookToRender.author}</h3>
            <p>ISBN: {props.bookToRender.isbn}</p>
        </section>
    )
}
export default BookDetail;