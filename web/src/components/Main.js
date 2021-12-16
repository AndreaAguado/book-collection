import '../styles/layout/Main.scss'
import Form from './Form';
const Main = () => {
    return (
        <main className="main">
            <section className="titles">
                <h2>Titles</h2>
            </section>
            <section className="add_book">
                <h2>Add new book</h2>
                <Form></Form>
            </section>
            <section className="update_book">
                <h2>Update book info</h2>
                <Form></Form>
            </section>
        </main>
    )
}
export default Main;