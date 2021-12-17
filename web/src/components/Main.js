import '../styles/layout/Main.scss'
import Form from './Form';
import SectionWrapper from './SectionWrapper';
const Main = (props) => {
    return (
        <main className="main">
            <SectionWrapper classname="titles" section_name="Titles"></SectionWrapper>
            <SectionWrapper classname="add_book" section_name="Add new book">
                <Form handleInput={props.handleInput}></Form>
            </SectionWrapper>
            <SectionWrapper classname="update_book" section_name="Update book info">
                <Form handleInput={props.handleInput}></Form>
            </SectionWrapper>
        </main>
    )
}
export default Main;